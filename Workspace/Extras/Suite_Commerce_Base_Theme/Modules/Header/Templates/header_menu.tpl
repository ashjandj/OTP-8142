{{#unless isStandalone}}
<nav class="header-menu-secondary-nav" aria-label="{{translate 'Categories' 'Name of the header section that contains the categories.'}}">
	<ul class="header-menu-level1">

		{{#each categories}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}}>
					<a class="{{class}}" {{objectToAtrributes this}} {{#if categories}}aria-expanded="false"{{/if}}>
					{{translate text}}
					</a>
					{{#if categories}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2">
								{{#each categories}}
								<li>
									<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>

									{{#if categories}}
									<ul class="header-menu-level3">
										{{#each categories}}
										<li>
											<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
										</li>
										{{/each}}
									</ul>
									{{/if}}
								</li>
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
				</li>
			{{/if}}
		{{/each}}

	</ul>

</nav>
{{/unless}}

{{!----
Use the following context variables when customizing this template:

	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}

