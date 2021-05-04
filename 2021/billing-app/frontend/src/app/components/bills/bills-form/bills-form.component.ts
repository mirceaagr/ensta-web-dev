import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import {IClient} from '../../clients/client.model';
import { IProduct } from '../../products/product.model';
import { IBillItem } from '../bill-item.model';
import { IBill } from '../bill.model';

// we extend the IBill Interface with the items
interface IFullBill extends IBill{
  items:IBillItem[]
}

@Component({
  selector: 'app-bills-form',
  templateUrl: './bills-form.component.html',
  styleUrls: ['./bills-form.component.css']
})
export class BillsFormComponent implements OnInit, OnChanges {

  @Input() bill:any;
  public billForm: FormGroup;
  clients: IClient[];
  public vatCoef = 19;
  public total = 0;
  public vat = 0;
  public products: IProduct[];
  public submitted = false;
  public error = null;
  public loading = false;
  public isUpdate = false;

  constructor(private fb:FormBuilder, private restService:RestService) { }
 

  // ngOnChanges updates when we receive new inputs
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.bill != null && changes.bill.currentValue != null) {
      this.updateFormWithBill(changes.bill.currentValue);
      this.isUpdate = true;
    }
  }

  async ngOnInit() {
    this.createForm();
    this.clients = await this.getClients();
    this.products = await this.getProducts(); // @TODO propper error handling for clients/products + spinner
    this.handleItemsChange();
    this.updateTotals(this.billForm.get('items').value);
    
  }

  updateTotals(items:IBillItem[]) {
    const {total, vat} = this.calculateBill(items)
    this.total = total;
    this.vat = vat;
  }

  // we should receive the bill object and also the items
  updateFormWithBill(bill:IFullBill) {
    if(this.billForm == null) return;
    // we clear the form array in case we have any items
    const formArr:FormArray = this.billForm.get('items') as FormArray;
    formArr.clear();
    // we create the new item controls with the received value
    bill.items.forEach(item => formArr.push(this.itemFormGroup(item)));
    // we patch the full form with the bill;
    this.billForm.patchValue(bill); 

  }

  handleItemsChange() {
    this.billForm.get('items').valueChanges
      .subscribe((items) => this.updateTotals(items));
  }

  getProducts():Promise<IProduct[]> {
    return this.restService.getProducts().toPromise();
  }

  getClients():Promise<IClient[]> {
    return this.restService.getClients().toPromise();

  }

  createForm() {
    const date = new Date();
    this.billForm = this.fb.group({
      id: this.fb.control(null),
      clientId:this.fb.control("", Validators.required),
      date: this.fb.control(date.toISOString().split('T')[0], Validators.required),
      items: this.fb.array([])
    })
  }

  addItem() {
    (this.billForm.get('items') as FormArray).push( this.itemFormGroup() );
  }

  itemFormGroup = (item:IBillItem = null) => {
    return this.fb.group({
      id:this.fb.control(item?.id || null),
      billId:this.fb.control(item?.billId || ""),
      productId: this.fb.control(item?.billId || "", Validators.required),
      qty: this.fb.control(item?.qty || "", Validators.required),
    })
  }

  deleteItem(index) {
    const item = this.billForm.get('items').value[index];
    if(item.id) {
      // we need to make a request to delete the item
      this.restService.deleteBillItem(item.id).subscribe()
    }
    (this.billForm.get('items') as FormArray).removeAt(index);
    
  }


  calculateBill = (items):{total:number, vat:number} => {
    let total = 0;
    items.forEach( (item) => {
      let product = this.products.find( (product:IProduct)=>product.id == item.productId);
      if(product != null) {
        total += item.qty * product.price
      }
    });
    let vat = total * this.vatCoef / 100;
    return {total, vat};
  }

  async onBillSubmit() {

    if(this.billForm.invalid) {
      this.billForm.markAllAsTouched();
      return alert("Form is invalid");
    }

    this.loading = true;
    this.error = null; //reseting the error
    const calculate = this.calculateBill(this.billForm.get('items').value);
    const bill = this.billForm.value;
    const items = bill.items;
    delete bill.items // we delete the items so that we don't pollute the bill object in db
    bill.total = calculate.total;
    bill.vat = calculate.vat;
    
    try{
      // if we have a bill id the operation is going to be PUT otherwise ti's a POST
      const newBill = await this.restService.postOrUpdateBill(bill).toPromise();
      items.forEach(async item => {
        // same with billItems
        await this.restService.postOrUpdateBillItems({...item, billId:newBill.id}).toPromise()// we add our new bill id to the bill item
        //@TODO  -> implement better error handling in case one of the bill item fails to be created
      })
      this.submitted = true;
    } catch(e) {
      this.error = e.message;
    }
    this.loading = false;
     
  }



}
