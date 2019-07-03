import { BlogEditorModule } from './blog-editor.module';

describe('BlogEditorModule', () => {
  let blogEditorModule: BlogEditorModule;

  beforeEach(() => {
    blogEditorModule = new BlogEditorModule();
  });

  it('should create an instance', () => {
    expect(blogEditorModule).toBeTruthy();
  });
});
