export class Tag {

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
  }

  id: string;
  name: string;
}

export default Tag;
