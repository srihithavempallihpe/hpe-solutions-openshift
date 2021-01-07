(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{312:function(e,t,o){e.exports=o.p+"assets/img/figure3.3d48127b.png"},504:function(e,t,o){"use strict";o.r(t);var n=o(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"solution-deployment-flow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solution-deployment-flow"}},[e._v("#")]),e._v(" Solution Deployment Flow")]),e._v(" "),n("p",[e._v("Figure 16 shows the flow of the installation process and aligns with this document.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(312),alt:""}})]),e._v(" "),n("p",[n("strong",[e._v("Figure 16")]),e._v(": Solution Deployment Flow")]),e._v(" "),n("h3",{attrs:{id:"setup-ipxe-tftp-and-dhcp-for-rhcos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-ipxe-tftp-and-dhcp-for-rhcos"}},[e._v("#")]),e._v(" Setup iPXE, TFTP, and DHCP for RHCOS")]),e._v(" "),n("p",[e._v("In this setup, the machine is booted by leveraging the iPXE server. In this step we prepare the iPXE and TFTP server to able to boot RHCOS. This is the initial stage and DHCP is an integral part of the PXE boot process. So, configuring the DHCP is also important. This configuration can be done using sudo access. The details to configure the iPXE set up is listed in the Deployment guide at "),n("a",{attrs:{href:"https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/develop/DL/scalable",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/develop/DL/scalable"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"configure-a-load-balancer-for-red-hat-openshift-4-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-a-load-balancer-for-red-hat-openshift-4-nodes"}},[e._v("#")]),e._v(" Configure a load balancer for Red Hat OpenShift 4 nodes")]),e._v(" "),n("p",[e._v("In multi-node cluster deployment of OpenShift, the load balancer is mandatory. Hewlett Packard Enterprise in this solution has leveraged HAProxy load balancing required traffic. This configuration can be done using sudo access. For commercial load balancer such as F5 Big-IP or any other OpenShift Container Platform 4 supported load balancer, you need to visit the manufacture website. For more details on configuring sudo to allow non-root users to execute root level commands and for information on HAProxy configuration, see the HPE solutions for Red Hat OpenShift Container Platform GitHub at "),n("a",{attrs:{href:"https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/develop/DL/scalable",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/develop/DL/scalable"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"configure-dns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-dns"}},[e._v("#")]),e._v(" Configure DNS")]),e._v(" "),n("p",[e._v("In user-provisioned infrastructure (UPI), DNS records are required for each machine. These records must be able to resolve the hostnames of all other machines in a Red Hat OpenShift Container Platform cluster. This component also can be configured using sudo access for Linux-based DNS solution or Windows-based DNS solution. For more information on Role-based access control, see "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows-server/networking/technologies/ipam/role-based-access-control",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Role based Access"),n("OutboundLink")],1),e._v(". For third-party DNS solutions, you need to visit the manufacture website. This provides more details to configure the sudo to allow non-root users to execute root level commands. For more information, see section "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-dns-user-infra_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("User-provisioned DNS requirements."),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"configure-firewall-ports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-firewall-ports"}},[e._v("#")]),e._v(" Configure firewall ports")]),e._v(" "),n("p",[e._v("In user-provisioned infrastructure (UPI), network connectivity between machines allows cluster components to communicate within the Red Hat OpenShift Container Platform cluster. Hence, the required ports must be open between Red Hat OpenShift cluster nodes. This component also can be\nconfigured using sudo access for Linux-based firewall. For third-party firewall solutions, you need to visit the manufacture website. This provides details on configuring sudo to allow non-root users to execute root level commands. For more information, see section "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-network-user-infra_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("networking requirements for user-provisioned infrastructure."),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"start-red-hat-openshift-container-platform-4-user-provisioned-infrastructure-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-red-hat-openshift-container-platform-4-user-provisioned-infrastructure-setup"}},[e._v("#")]),e._v(" Start Red Hat OpenShift Container Platform 4 user provisioned infrastructure setup")]),e._v(" "),n("p",[e._v("The user provisioned infrastructure (UPI), begins with installing a bastion host. This setup uses RHEL 7.6 virtual machine as a bastion host. This bastion host is used for deployment and management of the Red Hat OpenShift Container Platform 4 version clusters. The setup and configuration can be completed using sudo user access. For more information, see section "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#ssh-agent-using_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generating an SSH private key and adding it to the agent."),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"download-red-hat-openshift-container-platform-4-software-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#download-red-hat-openshift-container-platform-4-software-version"}},[e._v("#")]),e._v(" Download Red Hat OpenShift Container Platform 4 software version")]),e._v(" "),n("p",[e._v("Download OpenShift Container Platform 4. Check the access token for your cluster and install it on the bastion host. The bastion host is used for deploying and managing the OpenShift Container Platform 4 version clusters. The setup and configuration can be completed using sudo user\naccess.")]),e._v(" "),n("h3",{attrs:{id:"create-ignition-config-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-ignition-config-files"}},[e._v("#")]),e._v(" Create ignition config files")]),e._v(" "),n("p",[e._v("This step begins with the creation of the install-config.yaml in a new folder. Use the OpenShift install tool to convert the yaml to the ignition config files required to install the Red Hat OpenShift Container Platform 4. There is no system modification done on the bastion host or the provisioning server. This setup can be completed using sudo access. For more information, see\n"),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-initializing-manual_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-initializing-manual_installing-bare-metal."),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"upload-ignition-config-files-to-the-web"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upload-ignition-config-files-to-the-web"}},[e._v("#")]),e._v(" Upload ignition config files to the web")]),e._v(" "),n("p",[e._v("This step involves uploading the ignition config files to an internal website that allows anonymous access to the PXE boot process. Update the PXE default file to point to the website location of the ignition file. The action required in this step can be done using sudo user. For more information, see section "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-user-infra-machines-pxe_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Red Hat Enterprise Linux CoreOS (RHCOS) machines by PXE or iPXE booting."),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("In a virtualized setup to deploy OpenShift Container Platform 4, a template for OVA image is created. This template is used for creating nodes on the cluster. The ignition config files are provided on each node while provisioning the VMs. For more information on Create template for OVA Image, see "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_vsphere/installing-vsphere.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.4/installing/installing_vsphere/installing-vsphere.html"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"bootstrap-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-node"}},[e._v("#")]),e._v(" Bootstrap Node")]),e._v(" "),n("p",[e._v("The bootstrap node is a temporary node that is used to bring up the OpenShift cluster. After the cluster is up, this machine can be decommissioned, and the hardware will be reused. The iPXE boot process must use bootstrapping information as a part of the iPXE boot parameter to install the RHCOS on this node.")]),e._v(" "),n("h3",{attrs:{id:"master-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#master-node"}},[e._v("#")]),e._v(" Master Node")]),e._v(" "),n("p",[e._v("The master node uses the iPXE image for RHCOS after the bootstrap node. The iPXE boot process must use the master.ign information as part of the iPXE boot parameter to install the RHCOS on this node. The root user is not active by default in RHCOS. So, root login is not available.\nInstead, log in as the core user.")]),e._v(" "),n("h3",{attrs:{id:"create-the-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cluster"}},[e._v("#")]),e._v(" Create the cluster")]),e._v(" "),n("p",[e._v("The four nodes, one bootstrap and three master nodes boot up and are available at the login prompt for RHCOS. Use the OpenShift install tool to complete the bootstrap process. For more information, see "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-installing-bare-metal_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating the cluster."),n("OutboundLink")],1),e._v(". This action is taken using the sudo user logged in on the bastion host or provision server.")]),e._v(" "),n("h3",{attrs:{id:"login-to-the-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#login-to-the-cluster"}},[e._v("#")]),e._v(" Login to the cluster")]),e._v(" "),n("p",[e._v("After the bootstrap process has completed successfully, login to the cluster. The kubeconfig file is present in the auth directory where the ignition files are created on the bastion host. Export the cluster kubeconfig file and login to your cluster as a default system user. The kubeconfig file contains information about the cluster that is used by the CLI to connect a client to the correct cluster and API server. The file is specific to a cluster and is created during the Red Hat OpenShift Container Platform installation. After logging in, approve the pending OpenShift CSR for the nodes. For more information, see section\n"),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#cli-logging-in-kubeadmin_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logging in to the cluster."),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"initial-operator-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#initial-operator-configuration"}},[e._v("#")]),e._v(" Initial operator configuration")]),e._v(" "),n("p",[e._v("After the control plane initializes, you must immediately configure operators that are not available. This ensures their availability (for example image-registry). For more information, see section "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-operators-config_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial Operator Configuration"),n("OutboundLink")],1),e._v(". This action is taken using the sudo user logged in on the bastion host or provision server.")]),e._v(" "),n("h3",{attrs:{id:"worker-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#worker-node"}},[e._v("#")]),e._v(" Worker node")]),e._v(" "),n("p",[e._v("This step involves decommissioning the bootstrap node.Boot the compute nodes associated with worker node profile that has the second volume for local storage setup using iPXE. The root user is not active by default in RHCOS. So, root login is not available, instead, log in as the core user.")]),e._v(" "),n("h3",{attrs:{id:"complete-the-installation-of-red-hat-openshift-container-platform-4-and-higher-versions-for-user-provisioned-infrastructure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#complete-the-installation-of-red-hat-openshift-container-platform-4-and-higher-versions-for-user-provisioned-infrastructure"}},[e._v("#")]),e._v(" Complete the installation of Red Hat OpenShift Container Platform 4 and higher versions for user provisioned infrastructure")]),e._v(" "),n("p",[e._v("After the worker node boots up successfully, use the oc get nodes from the bastion host. The admin can see the worker nodes as part of the OpenShift cluster. Run the OpenShift install tool to complete the installation. For more information, see section "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_bare_metal/installing-bare-metal.html#installation-complete-user-infra_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("completing installation on user-provisioned infrastructure."),n("OutboundLink")],1),e._v(" After this process is completed, it will provide the URL for the Red Hat OpenShift Container Platform 4 version of the console along with the temporary user kubeadmin and temporary password for login.")]),e._v(" "),n("h3",{attrs:{id:"log-in-to-the-red-hat-openshift-container-platform-4-and-higher-versions-of-the-console"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-the-red-hat-openshift-container-platform-4-and-higher-versions-of-the-console"}},[e._v("#")]),e._v(" Log in to the Red Hat OpenShift Container Platform 4 and higher versions of the console")]),e._v(" "),n("p",[e._v("Log in to the OpenShift Container Platform 4 version of the console using the URL, username, and password provided in the complete Red Hat OpenShift Container Platform 4 user-provisioned infrastructure. Set up a new user with the cluster admin privileges. For more information, see\nsection "),n("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/authentication/understanding-authentication.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding authentication."),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"standards-used-in-this-document"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#standards-used-in-this-document"}},[e._v("#")]),e._v(" Standards used in this document")]),e._v(" "),n("p",[e._v("This document makes use of the following standard terms:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Installation user")]),e._v(" -- Individual or individuals responsible for carrying out the installation tasks to produce a functional Red Hat OpenShift Container Platform 4.4 solution on HPE ProLiant DL360 and DL380 Gen10 Servers.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Installer machine")]),e._v(" -- The system that is capable of connecting to various components within the solution and is used to run most of the key commands. In this solution, this machine also serves as the Ansible Engine host. For more information, refer to the section "),n("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#installer-machine"}},[e._v("Installer machine")]),e._v(" in this document for more details.")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);