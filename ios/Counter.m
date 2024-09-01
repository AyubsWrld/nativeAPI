//
//  Counter.m
//  nativeAPI
//
//  Created by Ayub Mohamed on 2024-09-01.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter,NSObject)


RCT_EXTERN_METHOD(increment:(RCTResponseSenderBlock))
RCT_EXTERN_METHOD(decrement:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject ) 
@end
