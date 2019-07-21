'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">arcc-website documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-8ff9eca6cd6abdb540d6e2766bccd16e"' : 'data-target="#xs-components-links-module-AboutModule-8ff9eca6cd6abdb540d6e2766bccd16e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-8ff9eca6cd6abdb540d6e2766bccd16e"' :
                                            'id="xs-components-links-module-AboutModule-8ff9eca6cd6abdb540d6e2766bccd16e"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link">AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-31685c6221fe0f80220f9ea82af2ed08"' : 'data-target="#xs-components-links-module-AppModule-31685c6221fe0f80220f9ea82af2ed08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-31685c6221fe0f80220f9ea82af2ed08"' :
                                            'id="xs-components-links-module-AppModule-31685c6221fe0f80220f9ea82af2ed08"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-5110113a7471483f8d224eab55cc6e42"' : 'data-target="#xs-components-links-module-AuthModule-5110113a7471483f8d224eab55cc6e42"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-5110113a7471483f8d224eab55cc6e42"' :
                                            'id="xs-components-links-module-AuthModule-5110113a7471483f8d224eab55cc6e42"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogEditorModule.html" data-type="entity-link">BlogEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogEditorModule-fdd5f626079c5c5776c526da89786ea0"' : 'data-target="#xs-components-links-module-BlogEditorModule-fdd5f626079c5c5776c526da89786ea0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogEditorModule-fdd5f626079c5c5776c526da89786ea0"' :
                                            'id="xs-components-links-module-BlogEditorModule-fdd5f626079c5c5776c526da89786ea0"' }>
                                            <li class="link">
                                                <a href="components/EditorPostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorPostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorPostsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorPostsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogEditorRoutingModule.html" data-type="entity-link">BlogEditorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link">BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-cf84d8f5ede3f2f3fbabe0915c5b76bb"' : 'data-target="#xs-components-links-module-BlogModule-cf84d8f5ede3f2f3fbabe0915c5b76bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-cf84d8f5ede3f2f3fbabe0915c5b76bb"' :
                                            'id="xs-components-links-module-BlogModule-cf84d8f5ede3f2f3fbabe0915c5b76bb"' }>
                                            <li class="link">
                                                <a href="components/AllComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogRoutingModule.html" data-type="entity-link">BlogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-5753073d090e2c566223394706a67cad"' : 'data-target="#xs-components-links-module-CoreModule-5753073d090e2c566223394706a67cad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-5753073d090e2c566223394706a67cad"' :
                                            'id="xs-components-links-module-CoreModule-5753073d090e2c566223394706a67cad"' }>
                                            <li class="link">
                                                <a href="components/BlogCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BubblesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BubblesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailSignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailSignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-CoreModule-5753073d090e2c566223394706a67cad"' : 'data-target="#xs-directives-links-module-CoreModule-5753073d090e2c566223394706a67cad"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CoreModule-5753073d090e2c566223394706a67cad"' :
                                        'id="xs-directives-links-module-CoreModule-5753073d090e2c566223394706a67cad"' }>
                                        <li class="link">
                                            <a href="directives/DropZoneDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropZoneDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CoreModule-5753073d090e2c566223394706a67cad"' : 'data-target="#xs-pipes-links-module-CoreModule-5753073d090e2c566223394706a67cad"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CoreModule-5753073d090e2c566223394706a67cad"' :
                                            'id="xs-pipes-links-module-CoreModule-5753073d090e2c566223394706a67cad"' }>
                                            <li class="link">
                                                <a href="pipes/FileUploadPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileUploadPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FragmentPolyfillModule.html" data-type="entity-link">FragmentPolyfillModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-FragmentPolyfillModule-07a46cd07b4839ccc37376115e3ce4bd"' : 'data-target="#xs-directives-links-module-FragmentPolyfillModule-07a46cd07b4839ccc37376115e3ce4bd"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-FragmentPolyfillModule-07a46cd07b4839ccc37376115e3ce4bd"' :
                                        'id="xs-directives-links-module-FragmentPolyfillModule-07a46cd07b4839ccc37376115e3ce4bd"' }>
                                        <li class="link">
                                            <a href="directives/FragmentTargetDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FragmentTargetDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-b84b0d56511eaed6368df56698ad5906"' : 'data-target="#xs-components-links-module-HomeModule-b84b0d56511eaed6368df56698ad5906"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-b84b0d56511eaed6368df56698ad5906"' :
                                            'id="xs-components-links-module-HomeModule-b84b0d56511eaed6368df56698ad5906"' }>
                                            <li class="link">
                                                <a href="components/BannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClubMembersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClubMembersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeepracerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeepracerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FounderLetterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FounderLetterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FunFactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FunFactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JetsonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JetsonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RaceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RaceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PressModule.html" data-type="entity-link">PressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PressModule-30b2817a11a30507ea43860dce7dcb18"' : 'data-target="#xs-components-links-module-PressModule-30b2817a11a30507ea43860dce7dcb18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PressModule-30b2817a11a30507ea43860dce7dcb18"' :
                                            'id="xs-components-links-module-PressModule-30b2817a11a30507ea43860dce7dcb18"' }>
                                            <li class="link">
                                                <a href="components/PressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PressComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PressRoutingModule.html" data-type="entity-link">PressRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SupportModule.html" data-type="entity-link">SupportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SupportModule-ecd4a94a6ccb94b0d65b386ddcd4c36b"' : 'data-target="#xs-components-links-module-SupportModule-ecd4a94a6ccb94b0d65b386ddcd4c36b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SupportModule-ecd4a94a6ccb94b0d65b386ddcd4c36b"' :
                                            'id="xs-components-links-module-SupportModule-ecd4a94a6ccb94b0d65b386ddcd4c36b"' }>
                                            <li class="link">
                                                <a href="components/SupportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupportRoutingModule.html" data-type="entity-link">SupportRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TimelineModule.html" data-type="entity-link">TimelineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimelineModule-46da9bd7eb015790e5137a9419c79379"' : 'data-target="#xs-components-links-module-TimelineModule-46da9bd7eb015790e5137a9419c79379"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimelineModule-46da9bd7eb015790e5137a9419c79379"' :
                                            'id="xs-components-links-module-TimelineModule-46da9bd7eb015790e5137a9419c79379"' }>
                                            <li class="link">
                                                <a href="components/ContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimelineRoutingModule.html" data-type="entity-link">TimelineRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/NativeWindowScroller.html" data-type="entity-link">NativeWindowScroller</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowScroller.html" data-type="entity-link">WindowScroller</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModuleOptions.html" data-type="entity-link">ModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WindowScrollerOptions.html" data-type="entity-link">WindowScrollerOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});