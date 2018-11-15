//
//  VSMainVC.swift
//  VisualSP
//
//  Created by andrei on 11/14/18.
//  Copyright © 2018 andrei. All rights reserved.
//

import Cocoa
import SafariServices

class VSMainVC: NSViewController, NSWindowDelegate {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.view.wantsLayer = true
    }
    
    override func viewDidAppear() {
        self.view.window?.delegate = self
        self.view.window?.styleMask = [NSWindow.StyleMask.closable, NSWindow.StyleMask.titled, NSWindow.StyleMask.miniaturizable]
    }
    
    func windowShouldClose(_ sender: NSWindow) -> Bool {
        NSApplication.shared.terminate(self)
        return true
    }
    
    @IBAction func onShowPreferencesClicked(_ sender: Any) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: BundleIDForExtension) { (error) in
            if let error = error {
                print("Error launching the extension's preferences: %@", error)
            }
        }
    }


}

