export class User {

	constructor(
		public firstName: string = '',
		public lastName: string = '',
		public email: string = '',
		public alias: string = '',
		public password: string = '',
		public address: string = '',
		public city: string = '',
        public state: string = '',
        public zip: string = '',
        public birthday: string = '',
        public bio: string = ''
		) {}
}
