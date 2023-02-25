class BGPContext {
    constructor() {
        this.vrfId = "VRF-0-0-1-1";
        this.fourByteASNSupport = true;
        this.fourByteASNNotation = asplain;
        this.localASNumber = 200;
        this.adminStatus = true;
        this.bgpRouterId = "12.12.12.12";
        this.synchronization = "disable";
        this.defaultLocalPreference = "100";
        this.advertiseNonBGPRoute = "externalAndInternal";
        this.speakerOverlapPolicy = "both";
        this.defaultRouteRedistribution = "disable";
        this.bgpPeers = [];
        this.bgpPeerGroups = [];
        this.routeProcessing = {};
        this.advancedFeatures = {};
    }
}