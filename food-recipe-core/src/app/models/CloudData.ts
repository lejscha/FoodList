export class CloudDataModel {

  constructor(data: any) {
    this.text = data.name;
    this.weight = data.count;
    //this.link = "www.google.se";
  }

  text: string;
  weight: number;
  //link: string;
}

export default CloudDataModel;
