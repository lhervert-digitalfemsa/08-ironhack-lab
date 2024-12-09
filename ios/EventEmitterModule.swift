//
//  EventEmitterModule.swift
//  CustomModules
//
//  Created by Leonardo Ivan Hervet Morales on 09/12/24.
//

import Foundation
import React
 
@objc(EventEmitterModule)
class EventEmitterModule: RCTEventEmitter {
 
    override static func requiresMainQueueSetup() -> Bool {
        return false
    }
 
    override func supportedEvents() -> [String]! {
        return ["onCustomEvent"]
    }
 
    @objc
    func sendEventToJavaScript() {
        sendEvent(withName: "onCustomEvent", body: ["message": "Hello from Swift!"])
    }
}
