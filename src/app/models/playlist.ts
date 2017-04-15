export class Playlist {
	constructor(
		public kind?: string,
		public etag?: string,
	    public itens?: [any],
        public pageInfo?: string) {}

}