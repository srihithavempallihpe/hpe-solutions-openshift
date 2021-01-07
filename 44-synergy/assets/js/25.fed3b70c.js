(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{506:function(e,t,n){"use strict";n.r(t);var o=n(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("This document describes the deployment of a high available and secure Red Hat® OpenShift® Container Platform 4 on HPE Synergy. It is intended to be used in conjunction with Ansible playbooks and python scripts found at "),n("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-openshift"),n("OutboundLink")],1),e._v(". This document was created using OpenShift Container Platform 4 and the documents for that version are available at "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/welcome/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.4/welcome/index.html"),n("OutboundLink")],1),e._v(".This document demonstrates how Red Hat OpenShift Container Platform 4 can be deployed and configured to take advantage of the HPE Synergy composable architecture and leverage HPE storage such as HPE Nimble, HPE 3PAR, and HPE Synergy D3940 Storage. Hewlett Packard Enterprise strives to make regular updates to this solution with the goal of validating against the latest available version of Red Hat OpenShift Container Platform. As a result, references in the document will generally refer to OpenShift Container Platform 4 and will mention specific sub-versions in strategic locations to note the version that was tested.")]),e._v(" "),n("p",[e._v("The Red Hat OpenShift Container Platform 4 deployment on HPE Synergy Composable Infrastructure configuration consists of the following:")]),e._v(" "),n("ul",[n("li",[e._v("Three (3) OpenShift Container Platform master nodes")]),e._v(" "),n("li",[e._v("Three (3) OpenShift Container Platform worker nodes")]),e._v(" "),n("li",[e._v("Six (6) HPE Synergy 480 Gen10 Compute Modules run Red Hat Enterprise Linux® CoreOS (RHCOS) to support the deployment")]),e._v(" "),n("li",[e._v("Persistent volume leverages HPE Storage systems such as HPE Nimble, HPE 3PAR, and HPE Synergy D3940 Storage to provide persistent storage for containers and registry as well as data management")])]),e._v(" "),n("p",[e._v("This document should be reviewed in its entirety and the installation user should understand all prerequisites and procedure before installation. It is also recommended that the installation user review the OpenShift Container Platform 4 installation process as described by Red Hat.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Hewlett Packard Enterprise plans to update this document over time with enhancements to deployment methodologies as well as new software versions, features, and functions. Check for the latest document at "),n("a",{attrs:{href:"https://hewlettpackard.github.io/hpe-solutions-openshift",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hewlettpackard.github.io/hpe-solutions-openshift"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Due to the ephemeral nature of the containers, protection of persistent data associated with containers is a crucial task. The pods which require persistent data use persistent volume with disks from the HPE Storage system.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);