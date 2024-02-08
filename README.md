# Repository for reproduce error in stream

```ts
  @GrpcMethod('HelloworldService', 'SayHelloStream')
  sayHelloStream() {
    throw new Error('Method not implemented');
  }
```

NestJS >= 10.2.9 ignoring error and client doesn't see it in stream method:

![client doesn't see the error](images/SayHelloStream_10.3.2.png)

**(Expected behavior)** Nest <= 10.2.8 client see the error in stream method:

![client see the error](images/SayHelloStream_10.2.8.png)
