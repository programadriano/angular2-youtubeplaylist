export class Playlist {
	constructor(
		public kind?: string,
		public etag?: string,
	    public itens?: [object],
        public pageInfo?: string) {}

}