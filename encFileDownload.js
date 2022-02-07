import { LightningElement, api } from 'lwc';

export default class EncFileDownload extends LightningElement {
   @api linkText = 'Download File';
   @api fileId;

   get href() {
      return `/sfsites/c/cms/delivery/media/${this.fileId}`
   }

}
