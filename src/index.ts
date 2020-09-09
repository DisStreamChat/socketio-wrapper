import { Socket } from "socket.io";

class PromiseSocket {
	private _socket: Socket;
	constructor(socket: Socket) {
		this._socket = socket;
	}

	async join(room: string | string[]) : Promise<null> {
		return new Promise((resolve, reject) =>
			this._socket.join(room, err => {
				if (err) {
					reject(err);
				} else resolve(null);
			})
		);
    }
    
    async leave(room: string) : Promise<null> {
		return new Promise((resolve, reject) =>
			this._socket.leave(room, err => {
				if (err) {
					reject(err);
				} else resolve(null);
			})
		);
	}
}

export default PromiseSocket;
