export class Instance {
    constructor(private _id: string,
                private _status: string,
                private _children: any[],
                private _incrementable: string) {
    }


  get id(): string {
    return this._id;
  }

  get status(): string {
    return this._status;
  }

  get children(): any[] {
    return this._children;
  }

  get incrementable(): string {
    return this._incrementable;
  }
}
