declare module 'goog:SomeEnum' {
  type SomeEnum = number ;
  export var SomeEnum : {
    A : SomeEnum ,
    B : SomeEnum ,
  };
}
declare module 'goog:SomeEnumValue.X' {
  var X : SomeEnum ;
  export default X ;
}
