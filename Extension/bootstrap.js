var VisualSP;
(function (VisualSP) {
    var InlineHelpBootstrap = (function () {
        function InlineHelpBootstrap() {
        }
        InlineHelpBootstrap.prototype.addScriptTag = function (url, id, replace) {
            if (replace === void 0) { replace = false; }
            if (document.getElementById("VisualSPOnlineHelpAppScript_" + id) != null) {
                if (replace) {
                    if (document.getElementById("VisualSPOnlineHelpAppScript_" + id).remove) {
                        document.getElementById("VisualSPOnlineHelpAppScript_" + id).remove();
                    }
                    else if (document.getElementById("VisualSPOnlineHelpAppScript_" + id).removeNode) {
                        document.getElementById("VisualSPOnlineHelpAppScript_" + id).removeNode();
                    }
                }
                else {
                    return;
                }
            }
            var script = document.createElement("SCRIPT");
            script.id = "VisualSPOnlineHelpAppScript_" + id;
            script.src = url;
            script.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script);
        };
        InlineHelpBootstrap.prototype.addCssLink = function (url, id, replace) {
            if (replace === void 0) { replace = false; }
            if (document.getElementById("VisualSPOnlineHelpAppCSS_" + id) != null) {
                if (replace) {
                    if (document.getElementById("VisualSPOnlineHelpAppCSS_" + id).remove) {
                        document.getElementById("VisualSPOnlineHelpAppCSS_" + id).remove();
                    }
                    else if (document.getElementById("VisualSPOnlineHelpAppCSS_" + id).removeNode) {
                        document.getElementById("VisualSPOnlineHelpAppCSS_" + id).removeNode();
                    }
                }
                else {
                    return;
                }
            }
            var link = document.createElement("link");
            link.id = "VisualSPOnlineHelpAppCSS_" + id;
            link.href = url;
            link.rel = "stylesheet";
            link.type = "text/css";
            document.getElementsByTagName("head")[0].appendChild(link);
        };
        InlineHelpBootstrap.prototype.handleMessage = function(event) {
            if (event.name == "GetVisualSPUserId") {
                var windows = [];
                var iframes = document.getElementsByTagName("iframe");
                var items = event.message.data;
                for (var i = 0; i < iframes.length; i++) {
                    windows.push(iframes[i].contentWindow);
                }

                for (var i = 0; i < windows.length; i++) {
                    windows[i].postMessage({ owner: "VisualSP", command: "GetUserIdResponse", data: items["VisualSPUserId"], source: window.location.href }, "*");
                }
            }
        };
        InlineHelpBootstrap.prototype.sendMessage = function(messageName, data) {
            if (messageName == undefined) return;

            if (data == undefined) {
                safari.extension.dispatchMessage(messageName);
            } else {
                safari.extension.dispatchMessage(messageName, data);
            }
        };
        InlineHelpBootstrap.prototype.initialize = function () {
            var _this = this;
            this.addScriptTag("https://visualsponline.azurewebsites.net/app/js/VisualSPHost.min.js?Extension=Chrome&Version=1.1.0." + (new Date).valueOf(), "Main", false);
            safari.self.addEventListener("message", _this.handleMessage);

            window.addEventListener("message", function (e) {
                var windows = [];
                var iframes = document.getElementsByTagName("iframe");
                for (var i = 0; i < iframes.length; i++) {
                    windows.push(iframes[i].contentWindow);
                }
                if (e.data.owner === "VisualSP") {
                    if (e.data.command === "GetUserId") {
                        _this.sendMessage("GetVisualSPUserId");
                    }
                    else if (e.data.command === "SetUserId") {
                        _this.sendMessage("SetVisualSPUserId", {"data": e.data.data});
                    }
                    else if (e.data.command === "GetChromeExtensionId") {
                        for (var i = 0; i < windows.length; i++) {
                            windows[i].postMessage({ owner: "VisualSP", command: "GetChromeExtensionIdResponse", data: "com.visualsp.macOS.safari", source: window.location.href }, "*");
                        }
                    }
                    else if (e.data.command === "AddScriptTag") {
                        _this.addScriptTag(e.data.data.url, e.data.data.id, true);
                    }
                    else if (e.data.command === "AddCssLink") {
                        _this.addCssLink(e.data.data.url, e.data.data.id, true);
                    }
                }
            });
        };
        return InlineHelpBootstrap;
    }());
    VisualSP.InlineHelpBootstrap = InlineHelpBootstrap;
})(VisualSP || (VisualSP = {}));

window.onload = function() {
    (new VisualSP.InlineHelpBootstrap()).initialize();
}
