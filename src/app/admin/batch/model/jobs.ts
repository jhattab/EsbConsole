export class Jobs {
    constructor(private _name: string,
                private _executionCount: string,
                private _launchable: string,
                private _incrementable: string) {
    }

    public get name(): string {
        return this._name;
    }

    public get executionCount(): string {
        return this._executionCount;
    }

    public get launchable(): string {
        return this._launchable;
    }

    public get incrementable(): string {
        return this._incrementable;
    }
}
