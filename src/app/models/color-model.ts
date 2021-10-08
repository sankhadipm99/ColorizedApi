export class ColorModel {
    id: number;
    uid: string;
    hex_value: string;
    color_name: string;

    constructor(id: number, uid: string, hex_value: string, color_name: string){
    this.id= id;
    this.uid= uid;
    this.hex_value= hex_value;
    this.color_name= color_name;
    }
}
