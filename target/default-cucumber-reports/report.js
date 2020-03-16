$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/SmartbearFeatures/orderProcess.feature");
formatter.feature({
  "name": "Smartbear order placing feature",
  "description": "  Agile story: When user is on the Order page, user should be able to place order after filling out the form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects \"\u003cproduct\u003e\" from product dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cquantity\u003e\" to quantity",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccustomer name\u003e\" to costumer name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstreet\u003e\" to street",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccity\u003e\" to city",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstate\u003e\"to state",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003czip\u003e\" to zip",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003ccardType\u003e\" as card type",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccard number\u003e\" to card number",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cexpiration date\u003e\" to expiration date",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies \"\u003cexpectedName\u003e\" is in the list",
  "keyword": "Then "
});
formatter.examples({
  "name": "User fills out the form as followed from the table below",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "customer name",
        "street",
        "city",
        "state",
        "zip",
        "cardType",
        "card number",
        "expiration date",
        "expectedName"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "IL",
        "60004",
        "Visa",
        "313313133315",
        "12/22",
        "Ken Adams"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "4",
        "Joey Tribbiani",
        "State st",
        "Chicago",
        "IL",
        "60656",
        "Visa",
        "123433533336",
        "11/22",
        "Joey Tribbiani"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "5",
        "Rachel Green",
        "Michigan st",
        "Chicago",
        "IL",
        "60656",
        "Visa",
        "335333333337",
        "10/22",
        "Rachel Green"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "5",
        "Chandler Bing",
        "Erie st",
        "Chicago",
        "IL",
        "60666",
        "Visa",
        "433353333338",
        "10/22",
        "Chandler Bing"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "9",
        "Dr DrakeRamoray",
        "Dale st",
        "Arl Hgths",
        "IL",
        "60452",
        "Visa",
        "532333335334",
        "10/22",
        "Dr DrakeRamoray"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "10",
        "Monica Geller",
        "Euclid ave",
        "Arl Hgths",
        "IL",
        "60312",
        "Visa",
        "733533333333",
        "11/22",
        "Monica Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "3",
        "Ross Geller",
        "River rd",
        "Des Plaines",
        "IL",
        "60666",
        "Visa",
        "833435363732",
        "10/22",
        "Ross Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "IL",
        "60312",
        "Visa",
        "933533333531",
        "12/22",
        "Ken Adams"
      ]
    }
  ]
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: -0.009\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Akylbeks-MacBook-Pro.local\u0027, ip: \u0027192.168.1.131\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/_k/f35cd2b56zl...}, goog:chromeOptions: {debuggerAddress: localhost:61115}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f3859b0a53bd7d27d0622bfeb0653140\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat steps.smartbearSteps.OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page(OrderStepDefs.java:27)\n\tat ✽.User is logged into SmartBear Tester account and on Order page(src/test/resources/features/SmartbearFeatures/orderProcess.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"1\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60004\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027ctl00_MainContent_fmwOrder_ddlProduct\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Akylbeks-MacBook-Pro.local\u0027, ip: \u0027192.168.1.131\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/_k/f35cd2b56zl...}, goog:chromeOptions: {debuggerAddress: localhost:61368}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 64992c3ad7dc8b72b27f6cd5c33aa2dc\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027ctl00_MainContent_fmwOrder_ddlProduct\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy32.getTagName(Unknown Source)\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\n\tat steps.smartbearSteps.OrderStepDefs.user_selects_from_product_dropdown(OrderStepDefs.java:38)\n\tat ✽.User selects \"FamilyAlbum\" from product dropdown(src/test/resources/features/SmartbearFeatures/orderProcess.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"4\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Joey Tribbiani\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"State st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60656\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"123433533336\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Joey Tribbiani\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Rachel Green\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Michigan st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"335333333337\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Rachel Green\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chandler Bing\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Erie st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60666\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"433353333338\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Chandler Bing\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"9\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dr DrakeRamoray\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dale st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60452\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"532333335334\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Dr DrakeRamoray\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Monica Geller\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Euclid ave\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60312\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"733533333333\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Monica Geller\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ross Geller\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"River rd\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Des Plaines\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60666\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"833435363732\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ross Geller\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60312\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"933533333531\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SmartbearFeatures/smartBearLogin.feature");
formatter.feature({
  "name": "Smartbear login feature verifications",
  "description": "  Agile Story: When user is on the login page of SmartBear app user should\n  be able to login using correct test data\n  A/C:\n  1- Only authenticated user should be able to login\n  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\n  Authenticated test data:\n  Username: Test\n  Password: tester\n  2- User should see \"Welcome, Tester!\" displayed when logged in.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I should be able to login using authenticated test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@positiveLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SmartBear login page",
  "keyword": "When "
});
formatter.match({
  "location": "SmartbearStepDefs.user_is_on_SmartBear_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct username",
  "keyword": "And "
});
formatter.match({
  "location": "SmartbearStepDefs.user_enters_correct_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct password",
  "keyword": "And "
});
formatter.match({
  "location": "SmartbearStepDefs.user_enters_correct_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartbearStepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in and be able to verify \"Welcome, Tester!\" text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartbearStepDefs.user_should_be_logged_in_and_be_able_to_verify_text_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "When user enters correct username and incorrect password user should see error message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SmartBear login page",
  "keyword": "When "
});
formatter.match({
  "location": "SmartbearStepDefs.user_is_on_SmartBear_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct username",
  "keyword": "And "
});
formatter.match({
  "location": "SmartbearStepDefs.user_enters_correct_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters incorrect password",
  "keyword": "And "
});
formatter.match({
  "location": "SmartbearStepDefs.user_enters_incorrect_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartbearStepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the error message displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartbearStepDefs.user_should_see_the_error_message_displayed_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});