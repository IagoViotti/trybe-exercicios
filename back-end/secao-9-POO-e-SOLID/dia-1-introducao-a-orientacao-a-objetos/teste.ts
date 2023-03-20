class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;
  
  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo(): string | undefined {
    return this.connectedTo;
  }

  set connectedTo(entry: string | undefined) {
    if (!entry || this._connections.includes(entry)) {
      this._connectedTo = entry;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
  
  turnOn():void {
    console.log(
      `TV brand: ${this._brand},
        size: ${this._size}inch,
        resolution: ${this._resolution},
        connections: ${this._connections}`
    );
  }
}

const tv1 = new Tv('toshiba', 20, '4K',['wi-fi', 'bluetooth'] );
tv1.turnOn();

tv1.connectedTo = 'wi-fi';
console.log(tv1.connectedTo);
