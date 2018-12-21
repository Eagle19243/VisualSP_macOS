//
//  VSGlobal.swift
//  VisualSP
//
//  Created by admin on 11/15/18.
//  Copyright © 2018 andrei. All rights reserved.
//

import Cocoa

class VSGlobal: NSObject {
    
    static func saveUserData(userData: String) {
        let userDefaults = UserDefaults(suiteName: "group.com.mobile.waybackmachine")
        userDefaults!.set(userData, forKey: "VisualSPUserId")
    }
    
    static func getUserData() -> String? {
        let userDefaults = UserDefaults(suiteName: "group.com.mobile.waybackmachine")
        return userDefaults!.string(forKey: "VisualSPUserId")!
    }
}
