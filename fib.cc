#include <nan.h>

int idx = 0;

int fibonacci(int index) {
    if (index == 0) {
        return 0;
    } else if (index == 1) {
        return 1;
    } else {
        return fibonacci(index - 1) + fibonacci(index - 2);
    }
}

NAN_METHOD(Get) {
    int res = fibonacci(idx++);
    info.GetReturnValue().Set(res);
}

NAN_MODULE_INIT(InitAll) {
    NAN_EXPORT(target, Get);
}

NODE_MODULE(fib, InitAll)