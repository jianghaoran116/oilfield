import * as React from 'react';
import { message } from 'skd';
import CopyableIcon from './CopyableIcon';
import { ThemeType } from './index';
import { CategoriesKeys } from './fields';

interface CategoryProps {
  title: CategoriesKeys;
  icons: string[];
  theme: ThemeType;
  newIcons: string[];
}

interface CategoryState {
  justCopied: string | null;
}

class Category extends React.Component<CategoryProps, CategoryState> {
  copyId?: number;

  state = {
    justCopied: null,
  };

  componentWillUnmount() {
    window.clearTimeout(this.copyId);
  }

  onCopied = (type: string, text: string) => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> copied 🎉
      </span>,
    );
    this.setState({ justCopied: type }, () => {
      this.copyId = window.setTimeout(() => {
        this.setState({ justCopied: null });
      }, 2000);
    });
  };

  render() {
    const {
      icons,
      title,
      newIcons,
      theme,
    } = this.props;
    const items = icons.map(name => (
      <CopyableIcon
        key={name}
        name={name}
        theme={theme}
        isNew={newIcons.indexOf(name) >= 0}
        justCopied={this.state.justCopied}
        onCopied={this.onCopied}
      />
    ));

    return (
      <div>
        <h3>{title}</h3>
        <ul className="anticons-list">{items}</ul>
      </div>
    );
  }
}

export default Category;
