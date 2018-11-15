//
//  VSGlobal.swift
//  VisualSP
//
//  Created by admin on 11/15/18.
//  Copyright © 2018 andrei. All rights reserved.
//

import Cocoa

class VSGlobal: NSObject {
    
    static func saveUserData(userData: Any?) {
        UserDefaults.standard.setValue(userData, forKey: "VisualSPUserId")
    }
    
    static func getUserData() {
        UserDefaults.standard.object(forKey: "VisualSPUserId")
    }
}
