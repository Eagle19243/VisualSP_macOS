//
//  VSAppDelegate.swift
//  VisualSP
//
//  Created by andrei on 11/14/18.
//  Copyright © 2018 andrei. All rights reserved.
//

import Cocoa

@NSApplicationMain
class VSAppDelegate: NSObject, NSApplicationDelegate {



    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Insert code here to initialize your application
    }
    
    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }
    
    @IBAction func openSupportWebsite(_ sender: Any) {
        NSWorkspace.shared.open(URL(string: SupportURL)!)
    }


}

