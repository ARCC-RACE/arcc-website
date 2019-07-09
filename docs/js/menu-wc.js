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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-de89e796b017ec8e3d1b1c73a02823dd"' : 'data-target="#xs-components-links-module-AboutModule-de89e796b017ec8e3d1b1c73a02823dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-de89e796b017ec8e3d1b1c73a02823dd"' :
                                            'id="xs-components-links-module-AboutModule-de89e796b017ec8e3d1b1c73a02823dd"' }>
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
                                            'data-target="#components-links-module-AppModule-e42bf4f2f98c59e17188b51b449051bc"' : 'data-target="#xs-components-links-module-AppModule-e42bf4f2f98c59e17188b51b449051bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e42bf4f2f98c59e17188b51b449051bc"' :
                                            'id="xs-components-links-module-AppModule-e42bf4f2f98c59e17188b51b449051bc"' }>
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
                                <a href="modules/BlogEditorModule.html" data-type="entity-link">BlogEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogEditorModule-7ae10927786b9500d51a232f96c83288"' : 'data-target="#xs-components-links-module-BlogEditorModule-7ae10927786b9500d51a232f96c83288"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogEditorModule-7ae10927786b9500d51a232f96c83288"' :
                                            'id="xs-components-links-module-BlogEditorModule-7ae10927786b9500d51a232f96c83288"' }>
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
                                            'data-target="#components-links-module-BlogModule-956df1e03eb3b43af86258a9addbcd90"' : 'data-target="#xs-components-links-module-BlogModule-956df1e03eb3b43af86258a9addbcd90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-956df1e03eb3b43af86258a9addbcd90"' :
                                            'id="xs-components-links-module-BlogModule-956df1e03eb3b43af86258a9addbcd90"' }>
                                            <li class="link">
                                                <a href="components/AllComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
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
                                            'data-target="#components-links-module-CoreModule-caa7695b3364cd7ed99bfff4358ccbfe"' : 'data-target="#xs-components-links-module-CoreModule-caa7695b3364cd7ed99bfff4358ccbfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-caa7695b3364cd7ed99bfff4358ccbfe"' :
                                            'id="xs-components-links-module-CoreModule-caa7695b3364cd7ed99bfff4358ccbfe"' }>
                                            <li class="link">
                                                <a href="components/BubblesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BubblesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailSignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailSignupComponent</a>
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
                            </li>
                            <li class="link">
                                <a href="modules/FragmentPolyfillModule.html" data-type="entity-link">FragmentPolyfillModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-FragmentPolyfillModule-73b8471724444709c39b3f5a188f91a9"' : 'data-target="#xs-directives-links-module-FragmentPolyfillModule-73b8471724444709c39b3f5a188f91a9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-FragmentPolyfillModule-73b8471724444709c39b3f5a188f91a9"' :
                                        'id="xs-directives-links-module-FragmentPolyfillModule-73b8471724444709c39b3f5a188f91a9"' }>
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
                                            'data-target="#components-links-module-HomeModule-e7d26fc2b228564931a60657201d5773"' : 'data-target="#xs-components-links-module-HomeModule-e7d26fc2b228564931a60657201d5773"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-e7d26fc2b228564931a60657201d5773"' :
                                            'id="xs-components-links-module-HomeModule-e7d26fc2b228564931a60657201d5773"' }>
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
                                            'data-target="#components-links-module-PressModule-bba3ba846ad97634c952287b028c1f38"' : 'data-target="#xs-components-links-module-PressModule-bba3ba846ad97634c952287b028c1f38"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PressModule-bba3ba846ad97634c952287b028c1f38"' :
                                            'id="xs-components-links-module-PressModule-bba3ba846ad97634c952287b028c1f38"' }>
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
                                            'data-target="#components-links-module-SupportModule-b52f856c02f303583ecddf964aa12492"' : 'data-target="#xs-components-links-module-SupportModule-b52f856c02f303583ecddf964aa12492"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SupportModule-b52f856c02f303583ecddf964aa12492"' :
                                            'id="xs-components-links-module-SupportModule-b52f856c02f303583ecddf964aa12492"' }>
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
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/NativeWindowScroller.html" data-type="entity-link">NativeWindowScroller</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowScroller.html" data-type="entity-link">WindowScroller</a>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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