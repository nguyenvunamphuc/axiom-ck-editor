/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';


class EditorInLine extends BalloonEditor {
}

class EditorClassic extends ClassicEditor {
}

const plugins = [
    Alignment,
    BlockQuote,
    Bold,
    Essentials,
    Heading,
    Italic,
    Link,
    List,
    Mention,
    Paragraph,
    // SpecialCharacters,
    // SpecialCharactersText,
    StandardEditingMode,
    Strikethrough,
    Table,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline,
    HorizontalLine
]

const configs = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'underline',
            '|',
            'heading',
            'undo',
            'link',
            'numberedList',
            'bulletedList',
            'todoList',
            'redo',
            'alignment',
            'insertTable',
            'restrictedEditingException',
            'blockQuote',
            'horizontalLine'],
    },
    language: 'en',
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
}

// Plugins to include in the build.
EditorInLine.builtinPlugins = plugins;
ClassicEditor.builtinPlugins = plugins;

// Editor configuration.
EditorInLine.defaultConfig = {toolbar: {items: [ 'heading','bold', 'italic', 'underline', ]}};
EditorClassic.defaultConfig = configs;

const Editor = {EditorInLine, EditorClassic}

export default Editor;
