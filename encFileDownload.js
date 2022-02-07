import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class EncFileDownload extends LightningElement {
   @wire(CurrentPageReference)
   pageRef;

   @api linkText = 'Download File';
   @api fileId;

   get href() {
      return `/sfsites/c/cms/delivery/media/${this.fileId}`
   }

}
