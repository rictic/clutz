declare namespace ಠ_ಠ.clutz {
  interface interface_exp {
    method ( ) : number ;
  }
}
declare namespace ಠ_ಠ.clutz.interface_exp {
  var staticMethod : ( ) => number ;
  var staticProp : number ;
}
declare module 'goog:interface_exp' {
  import alias = ಠ_ಠ.clutz.interface_exp;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.interface_exp {
  type SomeEnum = number ;
  var SomeEnum : {
    A : SomeEnum ,
    B : SomeEnum ,
  };
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'interface_exp.SomeEnum'): typeof ಠ_ಠ.clutz.interface_exp.SomeEnum;
}
declare module 'goog:interface_exp.SomeEnum' {
  import alias = ಠ_ಠ.clutz.interface_exp.SomeEnum;
  export default alias;
}
