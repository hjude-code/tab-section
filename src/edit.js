/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, RichText, InnerBlocks} from '@wordpress/block-editor';
import {Panel, PanelBody, PanelRow, SelectControl, TextControl} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<div className={'tag-section-wrapper'}>
			<InspectorControls>
				<Panel>
					<PanelBody title="tag name">
						<PanelRow>
							<SelectControl
								label="tag name"
								value={attributes.tagName}
								options={[
									{label: "h1", value: "h1"},
									{label: "h2", value: "h2"},
									{label: "h3", value: "h3"},
									{label: "h4", value: "h4"},
									{label: "h5", value: "h5"},
									{label: "h6", value: "h6"},
								]}
								
								onChange={(tagName)=>setAttributes({tagName})}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody>
						<PanelRow>
							<TextControl
							label="tag copy"
							value={attributes.tagCopy}
							onChange={(tagCopy)=>setAttributes({tagCopy})}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div class="tag-col tag-col-label is-position-sticky">
				<RichText
					tagName={attributes.tagName}
					value={attributes.tagCopy}
					class={"wp-block-heading"}
				/>
			</div>
			<div { ...useBlockProps() } class="tag-col">
				<InnerBlocks/>
			</div>
		</div>
	);
}
