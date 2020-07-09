import compose from "./j/goss_compose";
const qv = x => x * x;
const sc = x => x + 1;
Out.log(compose(qv, sc)(5));
Out.log(compose(sc, qv)(5));