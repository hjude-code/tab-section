<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div class="tag-section-wrapper">
	<div class="tag-col tag-col-label is-position-sticky">
		<<?php echo $attributes['tagName'] ?> class="wp-block-heading">
		<?php echo $attributes['tagCopy'] ?>
		</<?php echo $attributes['tagName'] ?>>
	</div>
	<div <?php echo get_block_wrapper_attributes(); ?> class="tag-col">
		<?php echo $content ?>
	</div>
</div>
