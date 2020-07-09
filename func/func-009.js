const cc = (x = 0) => () => ++x;
const c = cc();
Out.log(c());
Out.log(c());
Out.log(c());