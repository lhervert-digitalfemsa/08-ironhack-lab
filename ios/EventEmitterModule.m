//
//  EventEmitterModule.m
//  CustomModules
//
//  Created by Leonardo Ivan Hervet Morales on 09/12/24.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(EventEmitterModule, NSObject)

RCT_EXTERN_METHOD(sendEventToJavaScript)

@end
