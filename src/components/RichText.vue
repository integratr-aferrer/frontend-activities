<template>
  <div class="border" v-if="defaultContent && editor">
    <div class="d-flex flex-wrap mb-2 border-bottom">
        <button type="button" title="Bold" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <i class="fa-solid fa-bold"></i>
        </button>
        <button type="button" title="Italic" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            <i class="fa-solid fa-italic"></i>
        </button>
        <button type="button" title="Underline" @click="editor.chain().focus().toggleUnderline().run()" :disabled="!editor.can().chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
            <i class="fa-solid fa-underline"></i>
        </button>
        <button type="button" title="Strike Through" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
            <i class="fa-solid fa-strikethrough"></i>
        </button>
        <button type="button" title="Quotes" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
            <i class="fa-solid fa-quote-left"></i>
        </button>
        <button type="button" title="Code" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
            <i class="fa-solid fa-code"></i>
        </button>
        <button type="button" title="Heading 1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            <b>H1</b>
        </button>
        <button type="button" title="Heading 2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            <b>H2</b>
        </button>
        <button type="button" title="Heading 3" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            <b>H3</b>
        </button>
        <button type="button" title="Unordered List" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
            <i class="fa-solid fa-list"></i>
        </button>
        <button type="button" title="Ordered List" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
            <i class="fa-solid fa-list-ol"></i>
        </button>
    </div>
    <editor-content :editor="editor" class="px-2 overflow-auto" style="max-height: 100vh;"/>
  </div>
  
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import Underline from '@tiptap/extension-underline'
import BlockQuote from '@tiptap/extension-blockquote'
import StarterKit from '@tiptap/starter-kit';

export default {
    props: ['defaultContent'],
    components: {
        EditorContent,
    },

    data() {
        return {
        editor: null,
        }
    },

    beforeUnmount() {
        if(this.editor) {
            this.editor.destroy();
        }
    },

    watch: {
        defaultContent(newContent, oldContent) {
            this.editor = new Editor({
            content: newContent,
            extensions: [
                StarterKit,
                BlockQuote,
                Underline
            ],
            })
        },
    },
}
</script>

<style>
.is-active {
  background-color: var(--primary);
  color: white;
}

.is-active:hover {
    color: #ecf0f1;
    background-color: var(--primary);
}

button {
    padding: 0.5rem 0.6rem;
    background: transparent;
    border: none;
}

button:hover {
    background-color: #ecf0f1;
}

.ProseMirror:focus {
    outline: none !important;
}
</style>