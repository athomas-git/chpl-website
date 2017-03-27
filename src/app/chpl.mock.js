(function () {
    'use strict';

    angular
        .module('chpl.mock', [])
        .service('Mock', mock);

    function  mock () {
        var mock = {};

        mock.allCps = [
            {"id": 296,"chplProductNumber": "CHP-022218","edition": "2014","atl": null,"acb": "InfoGard","acbCertificationId": "IG-3138-14-0008","practiceType": "Ambulatory","developer": "Systemedx Inc","product": "2013 Systemedx Clinical Navigator","version": "2013.12","certificationDate": 1396497600000,"certificationStatus": "Active","surveillanceCount": 1,"openNonconformityCount": 0,"closedNonconformityCount": 0,"previousDevelopers": null,"criteriaMet": "170.314 (a)(1)â˜º170.314 (a)(10)â˜º170.314 (a)(11)â˜º170.314 (a)(12)â˜º170.314 (a)(13)â˜º170.314 (a)(14)â˜º170.314 (a)(15)â˜º170.314 (a)(2)â˜º170.314 (a)(3)â˜º170.314 (a)(4)â˜º170.314 (a)(5)â˜º170.314 (a)(6)â˜º170.314 (a)(7)â˜º170.314 (a)(8)â˜º170.314 (a)(9)â˜º170.314 (b)(1)â˜º170.314 (b)(2)â˜º170.314 (b)(3)â˜º170.314 (b)(4)â˜º170.314 (b)(5)(A)â˜º170.314 (b)(7)â˜º170.314 (c)(1)â˜º170.314 (c)(2)â˜º170.314 (c)(3)â˜º170.314 (d)(1)â˜º170.314 (d)(2)â˜º170.314 (d)(3)â˜º170.314 (d)(4)â˜º170.314 (d)(5)â˜º170.314 (d)(6)â˜º170.314 (d)(7)â˜º170.314 (d)(8)â˜º170.314 (e)(1)â˜º170.314 (e)(2)â˜º170.314 (e)(3)â˜º170.314 (f)(1)â˜º170.314 (f)(2)â˜º170.314 (f)(3)â˜º170.314 (g)(2)â˜º170.314 (g)(3)â˜º170.314 (g)(4)","cqmsMet": "CMS117â˜ºCMS123â˜ºCMS124â˜ºCMS125â˜ºCMS126â˜ºCMS127â˜ºCMS130â˜ºCMS131â˜ºCMS138â˜ºCMS146â˜ºCMS147â˜ºCMS155â˜ºCMS156â˜ºCMS165â˜ºCMS166â˜ºCMS50â˜ºCMS56â˜ºCMS66â˜ºCMS68â˜ºCMS69","mainSearch": "Systemedx Inc|2013 Systemedx Clinical Navigator|IG-3138-14-0008|CHP-022218","surveillance": "{\"surveillanceCount\":1,\"openNonconformityCount\":0,\"closedNonconformityCount\":0}"},
            {"id": 4708,"chplProductNumber": "CHP-022844","edition": "2014","atl": null,"acb": "Drummond Group","acbCertificationId": "05082014-2337-5","practiceType": "Ambulatory","developer": "VIPA Health Solutions, LLC","product": "24/7 smartEMR","version": "6.0","certificationDate": 1399521600000,"certificationStatus": "Active","surveillanceCount": 0,"openNonconformityCount": 0,"closedNonconformityCount": 0,"previousDevelopers": null,"criteriaMet": "170.314 (a)(1)â˜º170.314 (a)(10)â˜º170.314 (a)(11)â˜º170.314 (a)(12)â˜º170.314 (a)(13)â˜º170.314 (a)(14)â˜º170.314 (a)(15)â˜º170.314 (a)(2)â˜º170.314 (a)(3)â˜º170.314 (a)(4)â˜º170.314 (a)(5)â˜º170.314 (a)(6)â˜º170.314 (a)(7)â˜º170.314 (a)(8)â˜º170.314 (a)(9)â˜º170.314 (b)(1)â˜º170.314 (b)(2)â˜º170.314 (b)(3)â˜º170.314 (b)(4)â˜º170.314 (b)(5)(A)â˜º170.314 (b)(7)â˜º170.314 (c)(1)â˜º170.314 (c)(2)â˜º170.314 (c)(3)â˜º170.314 (d)(1)â˜º170.314 (d)(2)â˜º170.314 (d)(3)â˜º170.314 (d)(4)â˜º170.314 (d)(5)â˜º170.314 (d)(6)â˜º170.314 (d)(7)â˜º170.314 (d)(8)â˜º170.314 (e)(1)â˜º170.314 (e)(2)â˜º170.314 (e)(3)â˜º170.314 (f)(1)â˜º170.314 (f)(2)â˜º170.314 (f)(3)â˜º170.314 (f)(5)â˜º170.314 (g)(2)â˜º170.314 (g)(3)â˜º170.314 (g)(4)","cqmsMet": "CMS138â˜ºCMS156â˜ºCMS165â˜ºCMS166â˜ºCMS2â˜ºCMS50â˜ºCMS68â˜ºCMS69â˜ºCMS90","mainSearch": "VIPA Health Solutions, LLC|24/7 smartEMR|05082014-2337-5|CHP-022844","surveillance": "{\"surveillanceCount\":0,\"openNonconformityCount\":0,\"closedNonconformityCount\":0}"},
            {"id": 470,"chplProductNumber": "CHP-026059","edition": "2014","atl": null,"acb": "InfoGard","acbCertificationId": "IG-2697-15-0020","practiceType": "Ambulatory","developer": "DrScribe, Inc.","product": "365EHR","version": "4.0.14","certificationDate": 1430798400000,"certificationStatus": "Active","surveillanceCount": 2,"openNonconformityCount": 2,"closedNonconformityCount": 0,"previousDevelopers": null,"criteriaMet": "170.314 (a)(1)â˜º170.314 (a)(10)â˜º170.314 (a)(11)â˜º170.314 (a)(12)â˜º170.314 (a)(13)â˜º170.314 (a)(14)â˜º170.314 (a)(15)â˜º170.314 (a)(2)â˜º170.314 (a)(3)â˜º170.314 (a)(4)â˜º170.314 (a)(5)â˜º170.314 (a)(6)â˜º170.314 (a)(7)â˜º170.314 (a)(8)â˜º170.314 (a)(9)â˜º170.314 (b)(1)â˜º170.314 (b)(2)â˜º170.314 (b)(3)â˜º170.314 (b)(4)â˜º170.314 (b)(5)(A)â˜º170.314 (b)(7)â˜º170.314 (c)(1)â˜º170.314 (c)(2)â˜º170.314 (c)(3)â˜º170.314 (d)(1)â˜º170.314 (d)(2)â˜º170.314 (d)(3)â˜º170.314 (d)(4)â˜º170.314 (d)(5)â˜º170.314 (d)(6)â˜º170.314 (d)(7)â˜º170.314 (d)(8)â˜º170.314 (e)(1)â˜º170.314 (e)(2)â˜º170.314 (e)(3)â˜º170.314 (f)(1)â˜º170.314 (f)(2)â˜º170.314 (f)(3)â˜º170.314 (f)(5)â˜º170.314 (f)(6)â˜º170.314 (g)(2)â˜º170.314 (g)(3)â˜º170.314 (g)(4)","cqmsMet": "CMS122â˜ºCMS124â˜ºCMS125â˜ºCMS126â˜ºCMS127â˜ºCMS138â˜ºCMS165â˜ºCMS166â˜ºCMS68â˜ºCMS69","mainSearch": "DrScribe, Inc.|365EHR|IG-2697-15-0020|CHP-026059","surveillance": "{\"surveillanceCount\":2,\"openNonconformityCount\":2,\"closedNonconformityCount\":0}"},
            {"id": 443,"chplProductNumber": "CHP-028979","edition": "2014","atl": null,"acb": "InfoGard","acbCertificationId": "IG-3545-15-0068","practiceType": "Inpatient","developer": "Strateq Health Inc.","product": "37 Degrees","version": "V1.07","certificationDate": 1452661200000,"certificationStatus": "Active","surveillanceCount": 2,"openNonconformityCount": 0,"closedNonconformityCount": 3,"previousDevelopers": null,"criteriaMet": "170.314 (a)(11)â˜º170.314 (a)(13)â˜º170.314 (a)(14)â˜º170.314 (a)(17)â˜º170.314 (a)(3)â˜º170.314 (a)(4)â˜º170.314 (a)(5)â˜º170.314 (a)(9)â˜º170.314 (d)(1)â˜º170.314 (d)(5)â˜º170.314 (d)(6)â˜º170.314 (g)(4)","cqmsMet": null,"mainSearch": "Strateq Health Inc.|37 Degrees|IG-3545-15-0068|CHP-028979","surveillance": "{\"surveillanceCount\":2,\"openNonconformityCount\":0,\"closedNonconformityCount\":3}"},
            {"id": 7762,"chplProductNumber": "15.04.04.2649.Care.01.0.0.160701","edition": "2015","atl": "Drummond Group Inc.","acb": "Drummond Group","acbCertificationId": "15.04.04.2649.Care.01.0.0.160701","practiceType": null,"developer": "Carefluence","product": "Carefluence Open API","version": "1.0","certificationDate": 1467345600000,"certificationStatus": "Active","surveillanceCount": 0,"openNonconformityCount": 0,"closedNonconformityCount": 0,"previousDevelopers": null,"criteriaMet": "170.315 (d)(1)â˜º170.315 (d)(10)â˜º170.315 (d)(9)â˜º170.315 (g)(4)â˜º170.315 (g)(5)â˜º170.315 (g)(6)â˜º170.315 (g)(7)â˜º170.315 (g)(8)â˜º170.315 (g)(9)","cqmsMet": null,"mainSearch": "Carefluence|Carefluence Open API|15.04.04.2649.Care.01.0.0.160701|15.04.04.2649.Care.01.0.0.160701","surveillance": "{\"surveillanceCount\":0,\"openNonconformityCount\":0,\"closedNonconformityCount\":0}"}
        ];
        mock.decertifiedDevelopers = {"decertifiedDeveloperResults":[{"developer":{"developerId":551,"developerCode":"1550","name":"Greenway Health, LLC","website":null,"address":null,"contact":{"contactId":111,"firstName":"Fake","lastName":"Fake","email":"abc@gmai.com","phoneNumber":"1231231231","title":null},"lastModifiedDate":"1481938585744","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":1645,"developerId":551,"status":{"id":1,"status":"Active"},"statusDate":1459809041919},{"id":1662,"developerId":551,"status":{"id":3,"status":"Under certification ban by ONC"},"statusDate":1481938585744}],"status":{"id":3,"status":"Under certification ban by ONC"}},"certifyingBody":[{"id":3,"acbCode":"04","name":"Drummond Group","website":"http://www.drummondgroup.com","address":{"addressId":7,"line1":"street","line2":null,"city":"city","state":"state","zipcode":"98559","country":"USA"},"isDeleted":false}],"decertificationDate":1481938585744,"estimatedUsers":4326},{"developer":{"developerId":1651,"developerCode":"2650","name":"4Medica","website":null,"address":{"addressId":15,"line1":"test","line2":"test","city":"test","state":"test","zipcode":"11111","country":"USA"},"contact":{"contactId":123,"firstName":"test name","lastName":"test","email":"kekey@ainq.com","phoneNumber":"4437450987","title":null},"lastModifiedDate":"1490194030517","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":1665,"developerId":1651,"status":{"id":3,"status":"Under certification ban by ONC"},"statusDate":1490194030517},{"id":1661,"developerId":1651,"status":{"id":1,"status":"Active"},"statusDate":1469474110983}],"status":{"id":3,"status":"Under certification ban by ONC"}},"certifyingBody":[{"id":6,"acbCode":"07","name":"ICSA Labs","website":"http://www.test.com","address":{"addressId":5,"line1":"test1","line2":null,"city":"test","state":"test","zipcode":"20000","country":"USA"},"isDeleted":false}],"decertificationDate":1490194030517,"estimatedUsers":0}]};
        mock.developers = [{"developerId":5,"developerCode":"1004","name":"A-Z Professional Provider Services, LLC","website":null,"address":null,"contact":{"contactId":141,"firstName":"Testuser","lastName":"Lname","email":"abc@abc.com","phoneNumber":"999-999-9999","title":null},"lastModifiedDate":"1486182640776","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":1655,"developerId":5,"status":{"id":1,"status":"Active"},"statusDate":1459809040136},{"id":1663,"developerId":5,"status":{"id":2,"status":"Suspended by ONC"},"statusDate":1486182640776}],"status":{"id":2,"status":"Suspended by ONC"}},{"developerId":6,"developerCode":"1005","name":"A1 Medical Software Solutions","website":null,"address":null,"contact":{"contactId":89,"firstName":"test","lastName":"example","email":"thing@thing.com","phoneNumber":"thing","title":null},"lastModifiedDate":"1477078444021","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":58,"developerId":6,"status":{"id":1,"status":"Active"},"statusDate":1459809040140}],"status":{"id":1,"status":"Active"}},{"developerId":7,"developerCode":"1006","name":"A21 Healthcare IT Solutions","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040143","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":1,"developerId":7,"status":{"id":1,"status":"Active"},"statusDate":1459809040143}],"status":{"id":1,"status":"Active"}},{"developerId":11,"developerCode":"1010","name":"ABH Enterprises, LLC","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040166","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":2,"developerId":11,"status":{"id":1,"status":"Active"},"statusDate":1459809040166}],"status":{"id":1,"status":"Active"}},{"developerId":12,"developerCode":"1011","name":"ACL Laboratories","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040173","deleted":false,"transparencyAttestations":[{"acbId":6,"acbName":"ICSA Labs","attestation":"N/A"}],"statusEvents":[{"id":3,"developerId":12,"status":{"id":1,"status":"Active"},"statusDate":1459809040173}],"status":{"id":1,"status":"Active"}},{"developerId":15,"developerCode":"1014","name":"ACS State Healthcare, LLC","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040183","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":4,"developerId":15,"status":{"id":1,"status":"Active"},"statusDate":1459809040183}],"status":{"id":1,"status":"Active"}},{"developerId":16,"developerCode":"1015","name":"ADP AdvancedMD","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040187","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":5,"developerId":16,"status":{"id":1,"status":"Active"},"statusDate":1459809040187}],"status":{"id":1,"status":"Active"}},{"developerId":17,"developerCode":"1016","name":"ADP Advancedmd","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040191","deleted":false,"transparencyAttestations":[{"acbId":3,"acbName":"Drummond Group","attestation":"Affirmative"}],"statusEvents":[{"id":6,"developerId":17,"status":{"id":1,"status":"Active"},"statusDate":1459809040191}],"status":{"id":1,"status":"Active"}},{"developerId":18,"developerCode":"1017","name":"ADS Technologies, Inc.","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040194","deleted":false,"transparencyAttestations":[{"acbId":3,"acbName":"Drummond Group","attestation":"Affirmative"}],"statusEvents":[{"id":7,"developerId":18,"status":{"id":1,"status":"Active"},"statusDate":1459809040194}],"status":{"id":1,"status":"Active"}},{"developerId":19,"developerCode":"1018","name":"ADVault, Inc.","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040197","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":8,"developerId":19,"status":{"id":1,"status":"Active"},"statusDate":1459809040197}],"status":{"id":1,"status":"Active"}},{"developerId":20,"developerCode":"1019","name":"AKDHC DocTalk LLC","website":null,"address":null,"contact":null,"lastModifiedDate":"1459809040201","deleted":false,"transparencyAttestations":[],"statusEvents":[{"id":9,"developerId":20,"status":{"id":1,"status":"Active"},"statusDate":1459809040201}],"status":{"id":1,"status":"Active"}}];
        mock.modalInstance = {
            close: jasmine.createSpy('close'),
            dismiss: jasmine.createSpy('dismiss')
        };
        mock.search_options = {
            "productClassifications":[{"id":1,"name":"Modular EHR","description":null},{"id":2,"name":"Complete EHR","description":null}],
            "editions":[{"id":3,"name":"2015","description":null},{"id":2,"name":"2014","description":null},{"id":1,"name":"2011","description":null}],
            "certificationStatuses":[{"id":9,"name":"Withdrawn by Developer Under Surveillance/Review","description":null},{"id":1,"name":"Active","description":null},{"id":7,"name":"Suspended by ONC","description":null},{"id":3,"name":"Withdrawn by Developer","description":null},{"id":2,"name":"Retired","description":null},{"id":8,"name":"Terminated by ONC","description":null},{"id":4,"name":"Withdrawn by ONC-ACB","description":null},{"id":6,"name":"Suspended by ONC-ACB","description":null},{"id":5,"name":"Pending","description":null}],
            "practiceTypeNames":[{"id":2,"name":"Inpatient","description":null},{"id":1,"name":"Ambulatory","description":null}],
            "productNames":[{"id":1998,"name":"SnapEHR","description":null,"statuses":{"active":0,"retired":1,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":2208,"name":"Star-EHR","description":null,"statuses":{"active":0,"retired":1,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":1657,"name":"iConnect Access","description":null,"statuses":{"active":2,"retired":0,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":377,"name":"Powerchart, Cerner Healthe, Cerner Patient Portal, HealthSentry and P2 Sentinel","description":null,"statuses":{"active":0,"retired":14,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":2157,"name":"Soarian Quality Measures","description":null,"statuses":{"active":0,"retired":4,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":1992,"name":"ChartAccess","description":null,"statuses":{"active":0,"retired":1,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":2344,"name":"MyHealth@UABMedicine","description":null,"statuses":{"active":0,"retired":1,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":1321,"name":"MEDITECH MAGIC Public Health: Syndromic Surveillance Interface","description":null,"statuses":{"active":0,"retired":2,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":28,"name":"4medica iEHR® Cloud Ambulatory Solution mark 2","description":null,"statuses":{"active":1,"retired":1,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":187,"name":"PRM 2014","description":null,"statuses":{"active":1,"retired":0,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}}],
            "developerNames":[{"id":695,"name":"Ingenium Business Solutions, Inc.","description":null,"statuses":{"active":1,"retired":0,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":1441,"name":"Tranquilmoney, Inc.","description":null,"statuses":{"active":1,"retired":0,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":1500,"name":"Verisma Systems Inc.","description":null,"statuses":{"active":0,"retired":2,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":12,"name":"ACL Laboratories","description":null,"statuses":{"active":1,"retired":0,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}},{"id":1413,"name":"Technology Partners, Inc. dba IMAGINE Software","description":null,"statuses":{"active":0,"retired":1,"withdrawnByDeveloper":0,"withdrawnByAcb":0,"suspendedByAcb":0,"suspendedByOnc":0,"terminatedByOnc":0}}],
            "certBodyNames":[{"id":3,"name":"Drummond Group","description":null},{"id":1,"name":"InfoGard","description":null},{"id":6,"name":"ICSA Labs","description":null}],
            "certificationCriterionNumbers":[{"id":74,"name":"170.314 (a)(14)","description":null,"title":"Patient list creation"},{"id":89,"name":"170.314 (b)(8)","description":null,"title":"Optional - transitions of care"},{"id":144,"name":"170.302 (w)","description":null,"title":"Accounting of disclosures (optional)"},{"id":38,"name":"170.315 (d)(10)","description":null,"title":"Auditing Actions on Health Information"},{"id":118,"name":"170.314 (h)(2)","description":null,"title":"Optional - Transmit - Applicability Statement for Secure Health Transport and XDR/XDM for Direct Messaging"},{"id":23,"name":"170.315 (b)(8)","description":null,"title":"Data Segmentation for Privacy - Receive"},{"id":37,"name":"170.315 (d)(9)","description":null,"title":"Trusted Connection"},{"id":102,"name":"170.314 (d)(9)","description":null,"title":"Optional - accounting of disclosures"},{"id":106,"name":"170.314 (f)(1)","description":null,"title":"Immunization information"},{"id":60,"name":"170.315 (h)(2)","description":null,"title":"Direct Project, Edge Protocol, and XDR/XDM"},{"id":128,"name":"170.302 (g)","description":null,"title":"Smoking status"}],
            "cqmCriterionNumbers":[{"id":41,"name":"0372","description":null,"title":"VTE-2 Intensive Care Unit (ICU) VTE prophylaxis"},{"id":42,"name":"0373","description":null,"title":"VTE-3 VTE Patients with Overlap of Anticoagulation Therapy"},{"id":40,"name":"0371","description":null,"title":"Venous Thromboembolism (VTE)-1 VTE prophylaxis"},{"id":168,"name":"CMS144","description":null,"title":"Heart Failure (HF): BetaBlocker Therapy for Left Ventricular Systolic Dysfunction (LVSD)"},{"id":399,"name":"CMS72","description":null,"title":"Antithrombotic Therapy By End of Hospital Day 2"},{"id":163,"name":"CMS145","description":null,"title":"Coronary Artery Disease (CAD): Beta-Blocker Therapy-Prior Myocardial Infarction (MI) or Left Ventricular Systolic Dysfunction (LVEF <40%)"},{"id":389,"name":"CMS73","description":null,"title":"Venous Thromboembolism Patients with Anticoagulation Overlap Therapy"},{"id":3,"name":"0004","description":null,"title":"Initiation and Engagement of Alcohol and Other Drug Dependence Treatment: a) Initiation, b) Engagement"},{"id":68,"name":"CMS146","description":null,"title":"Appropriate Testing for Children with Pharyngitis"}]
        };
        mock.surveillances = [{"id":4,"surveillanceIdToReplace":null,"friendlyId":"SURV01","certifiedProduct":{"id":7085,"chplProductNumber":"CHP-028100","lastModifiedDate":"1486433432610","edition":"2014"},"startDate":1472702400000,"endDate":null,"type":{"id":1,"name":"Reactive"},"randomizedSitesUsed":null,"requirements":[{"id":4,"type":{"id":1,"name":"Certified Capability"},"requirement":"170.314 (a)(1)","result":{"id":1,"name":"Non-Conformity"},"nonconformities":[{"id":4,"nonconformityType":"170.314 (a)(1)","status":{"id":1,"name":"Open"},"dateOfDetermination":1472702400000,"capApprovalDate":null,"capStartDate":null,"capEndDate":null,"capMustCompleteDate":null,"summary":"Not available","findings":"N/A","sitesPassed":null,"totalSites":null,"developerExplanation":null,"resolution":null,"documents":[]}]}],"errorMessages":[]},{"id":6,"surveillanceIdToReplace":null,"friendlyId":"SURV02","certifiedProduct":{"id":7085,"chplProductNumber":"CHP-028100","lastModifiedDate":"1486433432610","edition":"2014"},"startDate":1480222800000,"endDate":1480827600000,"type":{"id":2,"name":"Randomized"},"randomizedSitesUsed":8,"requirements":[{"id":6,"type":{"id":1,"name":"Certified Capability"},"requirement":"170.314 (g)(4)","result":{"id":2,"name":"No Non-Conformity"},"nonconformities":[{"id":6,"nonconformityType":"170.314 (g)(4)","status":{"id":2,"name":"Closed"},"dateOfDetermination":1480395600000,"capApprovalDate":1480482000000,"capStartDate":1480482000000,"capEndDate":1480827600000,"capMustCompleteDate":1483074000000,"summary":"test","findings":"N/A","sitesPassed":0,"totalSites":8,"developerExplanation":"test","resolution":"test","documents":[]}]}],"errorMessages":["Surveillance Requirement 170.314 (g)(4) lists nonconformities but its result is not 'Non-Conformity'."]},{"id":12,"surveillanceIdToReplace":null,"friendlyId":"SURV03","certifiedProduct":{"id":7085,"chplProductNumber":"CHP-028100","lastModifiedDate":"1486433432610","edition":"2014"},"startDate":1480222800000,"endDate":null,"type":{"id":2,"name":"Randomized"},"randomizedSitesUsed":8,"requirements":[{"id":17,"type":{"id":1,"name":"Certified Capability"},"requirement":"170.314 (f)(1)","result":{"id":1,"name":"Non-Conformity"},"nonconformities":[{"id":17,"nonconformityType":"170.314 (f)(1)","status":{"id":1,"name":"Open"},"dateOfDetermination":1480309200000,"capApprovalDate":1480395600000,"capStartDate":1480482000000,"capEndDate":1480914000000,"capMustCompleteDate":1481173200000,"summary":"test","findings":"N/A","sitesPassed":5,"totalSites":8,"developerExplanation":"test","resolution":"test","documents":[]}]},{"id":15,"type":{"id":1,"name":"Certified Capability"},"requirement":"170.314 (f)(3)","result":{"id":1,"name":"Non-Conformity"},"nonconformities":[{"id":15,"nonconformityType":"170.314 (f)(3)","status":{"id":1,"name":"Open"},"dateOfDetermination":1480309200000,"capApprovalDate":1480395600000,"capStartDate":1480482000000,"capEndDate":1480914000000,"capMustCompleteDate":1481173200000,"summary":"test","findings":"N/A","sitesPassed":6,"totalSites":8,"developerExplanation":"test","resolution":"test","documents":[]}]},{"id":16,"type":{"id":1,"name":"Certified Capability"},"requirement":"170.314 (f)(2)","result":{"id":1,"name":"Non-Conformity"},"nonconformities":[{"id":16,"nonconformityType":"170.314 (f)(2)","status":{"id":1,"name":"Open"},"dateOfDetermination":1480309200000,"capApprovalDate":1480395600000,"capStartDate":1480482000000,"capEndDate":1480914000000,"capMustCompleteDate":1481173200000,"summary":"test","findings":"N/A","sitesPassed":2,"totalSites":8,"developerExplanation":"test","resolution":"test","documents":[]}]}],"errorMessages":[]}];
        mock.surveillanceData = {
            surveillanceTypes: {"expandable":false,"data":[{"id":2,"name":"Randomized","description":null},{"id":1,"name":"Reactive","description":null}]},
            surveillanceRequirementTypes: {"expandable":false,"data":[{"id":1,"name":"Certified Capability","description":null},{"id":3,"name":"Other Requirement","description":null},{"id":2,"name":"Transparency or Disclosure Requirement","description":null}]},
            surveillanceResultTypes: {"expandable":false,"data":[{"id":1,"name":"Non-Conformity","description":null},{"id":2,"name":"No Non-Conformity","description":null}]},
            nonconformityStatusTypes: {"expandable":false,"data":[{"id":2,"name":"Closed","description":null},{"id":1,"name":"Open","description":null}]},
            surveillanceRequirements: {"criteriaOptions2014":[{"id":61,"name":"170.314 (a)(1)","description":null},{"id":62,"name":"170.314 (a)(2)","description":null},{"id":63,"name":"170.314 (a)(3)","description":null},{"id":64,"name":"170.314 (a)(4)","description":null},{"id":65,"name":"170.314 (a)(5)","description":null},{"id":66,"name":"170.314 (a)(6)","description":null},{"id":67,"name":"170.314 (a)(7)","description":null},{"id":68,"name":"170.314 (a)(8)","description":null},{"id":69,"name":"170.314 (a)(9)","description":null},{"id":70,"name":"170.314 (a)(10)","description":null},{"id":71,"name":"170.314 (a)(11)","description":null},{"id":72,"name":"170.314 (a)(12)","description":null},{"id":73,"name":"170.314 (a)(13)","description":null},{"id":74,"name":"170.314 (a)(14)","description":null},{"id":75,"name":"170.314 (a)(15)","description":null},{"id":76,"name":"170.314 (a)(16)","description":null},{"id":77,"name":"170.314 (a)(17)","description":null},{"id":78,"name":"170.314 (a)(18)","description":null},{"id":79,"name":"170.314 (a)(19)","description":null},{"id":80,"name":"170.314 (a)(20)","description":null},{"id":81,"name":"170.314 (b)(1)","description":null},{"id":82,"name":"170.314 (b)(2)","description":null},{"id":83,"name":"170.314 (b)(3)","description":null},{"id":84,"name":"170.314 (b)(4)","description":null},{"id":85,"name":"170.314 (b)(5)(A)","description":null},{"id":86,"name":"170.314 (b)(5)(B)","description":null},{"id":87,"name":"170.314 (b)(6)","description":null},{"id":88,"name":"170.314 (b)(7)","description":null},{"id":89,"name":"170.314 (b)(8)","description":null},{"id":90,"name":"170.314 (b)(9)","description":null},{"id":91,"name":"170.314 (c)(1)","description":null},{"id":92,"name":"170.314 (c)(2)","description":null},{"id":93,"name":"170.314 (c)(3)","description":null},{"id":94,"name":"170.314 (d)(1)","description":null},{"id":95,"name":"170.314 (d)(2)","description":null},{"id":96,"name":"170.314 (d)(3)","description":null},{"id":97,"name":"170.314 (d)(4)","description":null},{"id":98,"name":"170.314 (d)(5)","description":null},{"id":99,"name":"170.314 (d)(6)","description":null},{"id":100,"name":"170.314 (d)(7)","description":null},{"id":101,"name":"170.314 (d)(8)","description":null},{"id":102,"name":"170.314 (d)(9)","description":null},{"id":103,"name":"170.314 (e)(1)","description":null},{"id":104,"name":"170.314 (e)(2)","description":null},{"id":105,"name":"170.314 (e)(3)","description":null},{"id":106,"name":"170.314 (f)(1)","description":null},{"id":107,"name":"170.314 (f)(2)","description":null},{"id":108,"name":"170.314 (f)(3)","description":null},{"id":109,"name":"170.314 (f)(4)","description":null},{"id":110,"name":"170.314 (f)(5)","description":null},{"id":111,"name":"170.314 (f)(6)","description":null},{"id":112,"name":"170.314 (f)(7)","description":null},{"id":113,"name":"170.314 (g)(1)","description":null},{"id":114,"name":"170.314 (g)(2)","description":null},{"id":115,"name":"170.314 (g)(3)","description":null},{"id":116,"name":"170.314 (g)(4)","description":null},{"id":117,"name":"170.314 (h)(1)","description":null},{"id":118,"name":"170.314 (h)(2)","description":null},{"id":119,"name":"170.314 (h)(3)","description":null}],"criteriaOptions2015":[{"id":1,"name":"170.315 (a)(1)","description":null},{"id":2,"name":"170.315 (a)(2)","description":null},{"id":3,"name":"170.315 (a)(3)","description":null},{"id":4,"name":"170.315 (a)(4)","description":null},{"id":5,"name":"170.315 (a)(5)","description":null},{"id":6,"name":"170.315 (a)(6)","description":null},{"id":7,"name":"170.315 (a)(7)","description":null},{"id":8,"name":"170.315 (a)(8)","description":null},{"id":9,"name":"170.315 (a)(9)","description":null},{"id":10,"name":"170.315 (a)(10)","description":null},{"id":11,"name":"170.315 (a)(11)","description":null},{"id":12,"name":"170.315 (a)(12)","description":null},{"id":13,"name":"170.315 (a)(13)","description":null},{"id":14,"name":"170.315 (a)(14)","description":null},{"id":15,"name":"170.315 (a)(15)","description":null},{"id":16,"name":"170.315 (b)(1)","description":null},{"id":17,"name":"170.315 (b)(2)","description":null},{"id":18,"name":"170.315 (b)(3)","description":null},{"id":19,"name":"170.315 (b)(4)","description":null},{"id":20,"name":"170.315 (b)(5)","description":null},{"id":21,"name":"170.315 (b)(6)","description":null},{"id":22,"name":"170.315 (b)(7)","description":null},{"id":23,"name":"170.315 (b)(8)","description":null},{"id":24,"name":"170.315 (b)(9)","description":null},{"id":25,"name":"170.315 (c)(1)","description":null},{"id":26,"name":"170.315 (c)(2)","description":null},{"id":27,"name":"170.315 (c)(3)","description":null},{"id":28,"name":"170.315 (c)(4)","description":null},{"id":29,"name":"170.315 (d)(1)","description":null},{"id":30,"name":"170.315 (d)(2)","description":null},{"id":31,"name":"170.315 (d)(3)","description":null},{"id":32,"name":"170.315 (d)(4)","description":null},{"id":33,"name":"170.315 (d)(5)","description":null},{"id":34,"name":"170.315 (d)(6)","description":null},{"id":35,"name":"170.315 (d)(7)","description":null},{"id":36,"name":"170.315 (d)(8)","description":null},{"id":37,"name":"170.315 (d)(9)","description":null},{"id":38,"name":"170.315 (d)(10)","description":null},{"id":39,"name":"170.315 (d)(11)","description":null},{"id":40,"name":"170.315 (e)(1)","description":null},{"id":41,"name":"170.315 (e)(2)","description":null},{"id":42,"name":"170.315 (e)(3)","description":null},{"id":43,"name":"170.315 (f)(1)","description":null},{"id":44,"name":"170.315 (f)(2)","description":null},{"id":45,"name":"170.315 (f)(3)","description":null},{"id":46,"name":"170.315 (f)(4)","description":null},{"id":47,"name":"170.315 (f)(5)","description":null},{"id":48,"name":"170.315 (f)(6)","description":null},{"id":49,"name":"170.315 (f)(7)","description":null},{"id":50,"name":"170.315 (g)(1)","description":null},{"id":51,"name":"170.315 (g)(2)","description":null},{"id":52,"name":"170.315 (g)(3)","description":null},{"id":53,"name":"170.315 (g)(4)","description":null},{"id":54,"name":"170.315 (g)(5)","description":null},{"id":55,"name":"170.315 (g)(6)","description":null},{"id":56,"name":"170.315 (g)(7)","description":null},{"id":57,"name":"170.315 (g)(8)","description":null},{"id":58,"name":"170.315 (g)(9)","description":null},{"id":59,"name":"170.315 (h)(1)","description":null},{"id":60,"name":"170.315 (h)(2)","description":null}],"transparencyOptions":["170.523 (k)(1)","170.523 (k)(2)"]},
            nonconformityTypes: {"expandable":false,"data":[{"id":74,"name":"170.314 (a)(14)","description":null},{"id":89,"name":"170.314 (b)(8)","description":null},{"id":38,"name":"170.315 (d)(10)","description":null},{"id":118,"name":"170.314 (h)(2)","description":null},{"id":23,"name":"170.315 (b)(8)","description":null},{"id":102,"name":"170.314 (d)(9)","description":null},{"id":37,"name":"170.315 (d)(9)","description":null},{"id":106,"name":"170.314 (f)(1)","description":null},{"id":60,"name":"170.315 (h)(2)","description":null},{"id":43,"name":"170.315 (f)(1)","description":null},{"id":64,"name":"170.314 (a)(4)","description":null},{"id":4,"name":"170.315 (a)(4)","description":null},{"id":null,"name":"Other Non-Conformity","description":null},{"id":75,"name":"170.314 (a)(15)","description":null},{"id":56,"name":"170.315 (g)(7)","description":null},{"id":73,"name":"170.314 (a)(13)","description":null},{"id":88,"name":"170.314 (b)(7)","description":null},{"id":15,"name":"170.315 (a)(15)","description":null},{"id":16,"name":"170.315 (b)(1)","description":null},{"id":39,"name":"170.315 (d)(11)","description":null},{"id":85,"name":"170.314 (b)(5)(A)","description":null},{"id":119,"name":"170.314 (h)(3)","description":null},{"id":24,"name":"170.315 (b)(9)","description":null},{"id":36,"name":"170.315 (d)(8)","description":null},{"id":63,"name":"170.314 (a)(3)","description":null},{"id":5,"name":"170.315 (a)(5)","description":null},{"id":59,"name":"170.315 (h)(1)","description":null},{"id":28,"name":"170.315 (c)(4)","description":null},{"id":44,"name":"170.315 (f)(2)","description":null},{"id":94,"name":"170.314 (d)(1)","description":null},{"id":55,"name":"170.315 (g)(6)","description":null},{"id":87,"name":"170.314 (b)(6)","description":null},{"id":116,"name":"170.314 (g)(4)","description":null},{"id":21,"name":"170.315 (b)(6)","description":null},{"id":80,"name":"170.314 (a)(20)","description":null},{"id":14,"name":"170.315 (a)(14)","description":null},{"id":null,"name":"170.523 (k)(2)","description":null},{"id":96,"name":"170.314 (d)(3)","description":null},{"id":46,"name":"170.315 (f)(4)","description":null},{"id":86,"name":"170.314 (b)(5)(B)","description":null},{"id":35,"name":"170.315 (d)(7)","description":null},{"id":62,"name":"170.314 (a)(2)","description":null},{"id":2,"name":"170.315 (a)(2)","description":null},{"id":108,"name":"170.314 (f)(3)","description":null},{"id":27,"name":"170.315 (c)(3)","description":null},{"id":45,"name":"170.315 (f)(3)","description":null},{"id":95,"name":"170.314 (d)(2)","description":null},{"id":58,"name":"170.315 (g)(9)","description":null},{"id":77,"name":"170.314 (a)(17)","description":null},{"id":22,"name":"170.315 (b)(7)","description":null},{"id":13,"name":"170.315 (a)(13)","description":null},{"id":null,"name":"170.523 (k)(1)","description":null},{"id":97,"name":"170.314 (d)(4)","description":null},{"id":117,"name":"170.314 (h)(1)","description":null},{"id":47,"name":"170.315 (f)(5)","description":null},{"id":34,"name":"170.315 (d)(6)","description":null},{"id":107,"name":"170.314 (f)(2)","description":null},{"id":61,"name":"170.314 (a)(1)","description":null},{"id":3,"name":"170.315 (a)(3)","description":null},{"id":26,"name":"170.315 (c)(2)","description":null},{"id":69,"name":"170.314 (a)(9)","description":null},{"id":57,"name":"170.315 (g)(8)","description":null},{"id":76,"name":"170.314 (a)(16)","description":null},{"id":19,"name":"170.315 (b)(4)","description":null},{"id":51,"name":"170.315 (g)(2)","description":null},{"id":114,"name":"170.314 (g)(2)","description":null},{"id":40,"name":"170.315 (e)(1)","description":null},{"id":70,"name":"170.314 (a)(10)","description":null},{"id":84,"name":"170.314 (b)(4)","description":null},{"id":103,"name":"170.314 (e)(1)","description":null},{"id":12,"name":"170.315 (a)(12)","description":null},{"id":48,"name":"170.315 (f)(6)","description":null},{"id":98,"name":"170.314 (d)(5)","description":null},{"id":33,"name":"170.315 (d)(5)","description":null},{"id":111,"name":"170.314 (f)(6)","description":null},{"id":25,"name":"170.315 (c)(1)","description":null},{"id":79,"name":"170.314 (a)(19)","description":null},{"id":68,"name":"170.314 (a)(8)","description":null},{"id":8,"name":"170.315 (a)(8)","description":null},{"id":11,"name":"170.315 (a)(11)","description":null},{"id":20,"name":"170.315 (b)(5)","description":null},{"id":50,"name":"170.315 (g)(1)","description":null},{"id":115,"name":"170.314 (g)(3)","description":null},{"id":41,"name":"170.315 (e)(2)","description":null},{"id":83,"name":"170.314 (b)(3)","description":null},{"id":91,"name":"170.314 (c)(1)","description":null},{"id":49,"name":"170.315 (f)(7)","description":null},{"id":99,"name":"170.314 (d)(6)","description":null},{"id":32,"name":"170.315 (d)(4)","description":null},{"id":110,"name":"170.314 (f)(5)","description":null},{"id":1,"name":"170.315 (a)(1)","description":null},{"id":109,"name":"170.314 (f)(4)","description":null},{"id":67,"name":"170.314 (a)(7)","description":null},{"id":92,"name":"170.314 (c)(2)","description":null},{"id":9,"name":"170.315 (a)(9)","description":null},{"id":42,"name":"170.315 (e)(3)","description":null},{"id":78,"name":"170.314 (a)(18)","description":null},{"id":10,"name":"170.315 (a)(10)","description":null},{"id":53,"name":"170.315 (g)(4)","description":null},{"id":72,"name":"170.314 (a)(12)","description":null},{"id":82,"name":"170.314 (b)(2)","description":null},{"id":105,"name":"170.314 (e)(3)","description":null},{"id":17,"name":"170.315 (b)(2)","description":null},{"id":31,"name":"170.315 (d)(3)","description":null},{"id":100,"name":"170.314 (d)(7)","description":null},{"id":66,"name":"170.314 (a)(6)","description":null},{"id":6,"name":"170.315 (a)(6)","description":null},{"id":93,"name":"170.314 (c)(3)","description":null},{"id":54,"name":"170.315 (g)(5)","description":null},{"id":71,"name":"170.314 (a)(11)","description":null},{"id":52,"name":"170.315 (g)(3)","description":null},{"id":113,"name":"170.314 (g)(1)","description":null},{"id":81,"name":"170.314 (b)(1)","description":null},{"id":104,"name":"170.314 (e)(2)","description":null},{"id":null,"name":"170.523 (l)","description":null},{"id":18,"name":"170.315 (b)(3)","description":null},{"id":30,"name":"170.315 (d)(2)","description":null},{"id":101,"name":"170.314 (d)(8)","description":null},{"id":90,"name":"170.314 (b)(9)","description":null},{"id":112,"name":"170.314 (f)(7)","description":null},{"id":65,"name":"170.314 (a)(5)","description":null},{"id":29,"name":"170.315 (d)(1)","description":null},{"id":7,"name":"170.315 (a)(7)","description":null}]}
        };
        return mock;
    }
})();
