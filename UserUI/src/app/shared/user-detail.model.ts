export class UserDetail {

    // PascalCase -> cameCase on data retrieval
    // camelCase json -> PascalCase when sending data

    // Should be in camel case corresponding to the UserDetail model in .net web api

    userId: number = 0;   // "strictPropertyInitialization": false in tsconfig
    name:string = "";
    dateOfBirth:string = "";
    gender:string = "";
    phoneNumber:string = "";

}
