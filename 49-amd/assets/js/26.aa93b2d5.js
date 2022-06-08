(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{516:function(e,t,n){e.exports=n.p+"assets/img/figure3.01a1f9af.png"},555:function(e,t,n){"use strict";n.r(t);var o=n(54),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"physical-bare-metal-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#physical-bare-metal-configuration"}},[e._v("#")]),e._v(" Physical bare metal configuration")]),e._v(" "),o("p",[e._v("In a bare metal configuration, the master nodes are deployed in a highly available configuration running on three (3) HPE ProLiant DL325 Gen10 Plus v2 servers. Red Hat OpenShift worker nodes are deployed on the bare metal with three (3) HPE ProLiant DL385 Gen10 Plus v2 servers. The temporary Bootstrap node is deployed on one of the worker nodes and later on configured as worker node.\nThe solution uses the internal storage on HPE ProLiant DL385 and DL325 Gen10 Plus v2 servers. Optionally, three more HPE DL385 Gen10 Plus v2 servers can be added to the cluster for RedHat Ceph cluster with RedHat container external storage.The deployment environment (Installer machine, iPXE, DNS, DHCP etc.) and a load balancer in this solution was deployed on the virtual machines. The OpenShift install tool is run to generate ignition files that contain information about the hosts that will be provisioned. The Core OS for the worker nodes is then booted with the help of iPXE and the ignition files are passed with the OS image during installation. HPE Storage systems such as HPE Nimble, HPE Primera provide support for ephemeral and persistent container volume via persistent volume."),o("br"),e._v("\nFigure 2 provides an overview of the Red Hat OpenShift Container Platform 4.9 solution layout in a bare metal setup configuration.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(516),alt:""}})]),e._v(" "),o("p",[e._v("Figure 2. Solution layout for a bare metal setup")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("•\tThe number of physical nodes represented in the solution layout is subject to change based on customer requirements. and align with best practices for deploying OpenShift Container Platform")]),e._v(" "),o("p",[e._v("•\tThe scripts and reference files provided with this document are included as examples of how to build the solution. They are not supported by Hewlett Packard Enterprise or Red Hat. It is expected that the scripts and reference files will be modified to meet the requirements of the deployment environment by the installation user prior to installation.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);