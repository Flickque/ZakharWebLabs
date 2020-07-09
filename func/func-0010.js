const f = x => x <= 1 ? 1 : x * f(x - 1);
Out.log((x => x <= 1 ? 1 : x * f(x - 1))(5))
Out.log(f(5));