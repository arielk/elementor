module.exports = Marionette.Behavior.extend( {
	previewWindow: null,

	ui: function() {
		return {
			buttonPreview: '#elementor-panel-saver-button-preview',
			buttonPublish: '#elementor-panel-saver-button-publish',
			buttonPublishLabel: '#elementor-panel-saver-button-publish-label',
			menuDiscard: '#elementor-panel-saver-menu-discard',
			menuSaveDraft: '#elementor-panel-saver-menu-save-draft'
		};
	},

	events: function() {
		return {
			'click @ui.buttonPreview': 'onClickButtonPreview',
			'click @ui.buttonPublish': 'onClickButtonPublish',
			'click @ui.menuSaveDraft': 'onClickMenuSaveDraft',
			'click @ui.menuDiscard': 'onClickMenuDiscard'
		};
	},

	initialize: function() {
		elementor.saver
			.on( 'before:save', this.onBeforeSave.bind( this ) )
			.on( 'after:save', this.onAfterSave.bind( this ) )
			.on( 'after:saveError', this.onAfterSaveError.bind( this ) );

		elementor.settings.document.model.on( 'change', this.onPostStatusChange.bind( this ) );
	},

	onRender: function() {
		this.setMenuItems( elementor.settings.document.model.get( 'post_status' ) );
		this.addTooltip();
	},

	onPostStatusChange: function( settings ) {
		var changed = settings.changed;

		if ( ! _.isUndefined( changed.post_status ) ) {
			this.setMenuItems( changed.post_status );

			this.refreshWpPreview();

			// Refresh page-settings post-status value.
			if ( 'document_settings' === elementor.getPanelView().getCurrentPageName() ) {
				elementor.getPanelView().getCurrentPageView().render();
			}
		}
	},

	onBeforeSave: function( options ) {
		NProgress.start();
		if ( 'autosave' !== options.status ) {
			this.ui.buttonPublish.addClass( 'elementor-button-state' );
		}
	},

	onAfterSave: function() {
		NProgress.done();
		this.ui.buttonPublish.removeClass( 'elementor-button-state' );
		this.refreshWpPreview();
	},

	onAfterSaveError: function() {
		NProgress.done();
		this.ui.buttonSave.removeClass( 'elementor-button-state' );
	},

	onClickButtonPreview: function() {
		// Open immediately in order to avoid popup blockers.
		this.previewWindow = window.open( elementor.config.wp_preview.url, elementor.config.wp_preview.target );

		if ( elementor.saver.isEditorChanged() ) {
			if ( elementor.saver.xhr ) {
				elementor.saver.xhr.abort();
				elementor.saver.isSaving = false;
			}

			elementor.saver.doAutoSave();
		}
	},

	onClickButtonPublish: function() {
		var postStatus = elementor.settings.document.model.get( 'post_status' );
		switch ( postStatus ) {
			case 'publish':
			case 'private':
				elementor.saver.update();
				break;
			case 'draft':
			case 'pending': // User cannot change post status
			case undefined: // TODO: as a contributor it's undefined instead of 'pending'.
				if ( elementor.config.current_user_can_publish ) {
					elementor.saver.publish();
				} else {
					elementor.saver.update();
				}
				break;
		}
	},

	onClickMenuSaveDraft: function() {
		elementor.saver.saveAutoSave( {
			onSuccess: function() {
				location.href = elementor.config.exit_to_dashboard_url;
			}
		} );
	},

	onClickMenuDiscard: function() {
		elementor.saver.discard();
	},

	setMenuItems: function( postStatus ) {
		var publishLabel = 'publish';
		this.ui.menuDiscard.hide();

		switch ( postStatus ) {
			case 'publish':
			case 'private':
				this.ui.menuDiscard.show();
				publishLabel = 'update';
				break;
			case 'draft':
			case 'pending': // User cannot change post status
			case undefined: // TODO: as a contributor it's undefined instead of 'pending'.
				if ( ! elementor.config.current_user_can_publish ) {
					publishLabel = 'update';
				}
				break;
		}

		this.ui.buttonPublishLabel.html( elementor.translate( publishLabel ) );
	},

	addTooltip: function() {
		// Create tooltip on controls
		this.$el.find( '.tooltip-target' ).tipsy( {
			// `n` for down, `s` for up
			gravity: 's',
			title: function() {
				return this.getAttribute( 'data-tooltip' );
			}
		} );
	},

	refreshWpPreview: function() {
		// If the this.previewWindow is not null and not closed.
		if ( this.previewWindow && this.previewWindow.location.reload ) {
			// Refresh URL form updated config.
			this.previewWindow.location = elementor.config.wp_preview.url;
		}
	}
} );
