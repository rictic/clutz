declare namespace ಠ_ಠ.clutz.module.Foo {
  type Legacy = ಠ_ಠ.clutz.module$contents$module$Foo$Legacy_A ;
  let Legacy : typeof ಠ_ಠ.clutz.module$contents$module$Foo$Legacy_A ;
}
declare module 'goog:module.Foo.Legacy' {
  import Legacy = ಠ_ಠ.clutz.module.Foo.Legacy;
  export default Legacy;
}
declare namespace ಠ_ಠ.clutz {
  class module$contents$module$Foo$Legacy_A {
    private noStructuralTyping_: any;
  }
}
