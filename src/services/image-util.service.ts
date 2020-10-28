import { Injectable } from '@angular/core';

@Injectable()
export class ImageUtilService {

    dataUriToBlob(dataURI) {
        const byteString = atob(dataURI.changingThisBreaksApplicationSecurity.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);

        const mimeString = dataURI.changingThisBreaksApplicationSecurity.split(',')[0].split(':')[1].split(';')[0];
        return new Blob([ab], { type: mimeString });
    }
}
