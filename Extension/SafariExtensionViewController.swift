//
//  SafariExtensionViewController.swift
//  Extension
//
//  Created by andrei on 11/14/18.
//  Copyright © 2018 andrei. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
