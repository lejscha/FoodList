export class CloudDataModel {

  constructor(data: any) {
    this.text = data.name;
    this.weight = data.count;
  }

  text: string;
  weight: number;
}

export default CloudDataModel;
