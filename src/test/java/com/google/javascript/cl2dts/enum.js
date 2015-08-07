goog.provide('SomeEnum');
goog.provide('SomeEnumValue.X');

/** @enum {number} */
SomeEnum = {
  A: 1,
  B: 2
};

/** @type {SomeEnum} */
SomeEnumValue.X = SomeEnum.A;
