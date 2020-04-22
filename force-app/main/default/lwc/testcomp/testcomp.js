import { LightningElement, track } from 'lwc';

export default class Testcomp extends LightningElement {
    @track sample ='what';
    changeHandler(event){
     this.sample = event.target.value;
 }

}