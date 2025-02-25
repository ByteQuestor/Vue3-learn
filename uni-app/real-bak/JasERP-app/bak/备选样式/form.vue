<template>
  <view class="container">
    <button class="primary-btn" @click="showForm = true">添加新产品</button>

    <uni-popup ref="formPopup" type="center" :is-mask-click="false">
      <view class="form-container">
        <!-- 表单标题 -->
        <view class="form-header">
          <text class="title">新产品信息</text>
          <uni-icons type="close" size="24" @click="closeForm"/>
        </view>

        <scroll-view scroll-y class="form-body">
          <!-- 图片上传 -->
          <view class="form-item">
            <text class="label">产品图片：</text>
            <view class="upload-container">
              <image 
                v-for="(img, index) in formData.images"
                :key="index"
                :src="img"
                class="preview-image"
                @click="previewImage(index)"
              />
              <image 
                src="/static/feedback/upload.png"
                class="upload-btn"
                @click="chooseImage"
              />
            </view>
          </view>

          <!-- 产品名称 -->
          <view class="form-item">
            <text class="label">产品名称：</text>
            <uni-easyinput 
              v-model="formData.name"
              placeholder="请输入产品名称"
              trim="both"
            />
          </view>

          <!-- SN码 -->
          <view class="form-item">
            <text class="label">SN码：</text>
            <view class="input-with-btn">
              <uni-easyinput 
                v-model="formData.sn"
                placeholder="请输入或扫描SN码"
                trim="both"
              />
              <button class="scan-btn" @click="handleScan">扫描</button>
            </view>
          </view>

          <!-- 分类选择 -->
          <view class="form-item">
            <text class="label">产品分类：</text>
            <view class="selector" @click="showCategory = true">
              {{ formData.category || '请选择分类' }}
            </view>
          </view>

          <!-- 货号 -->
          <view class="form-item">
            <text class="label">货号：</text>
            <uni-easyinput 
              v-model="formData.productNo"
              placeholder="请输入货号"
              trim="both"
            />
          </view>

          <!-- 属性管理 -->
          <view class="form-item">
            <text class="label">产品属性：</text>
            <view class="selector" @click="showProperty = true">
              {{ formData.properties.join(',') || '请选择属性' }}
            </view>
          </view>

          <!-- 单位选择 -->
          <view class="form-item">
            <text class="label">单位：</text>
            <view class="selector" @click="showUnit = true">
              {{ formData.unit || '请选择单位' }}
            </view>
          </view>

          <!-- 价格管理 -->
          <view class="form-item">
            <text class="label">价格管理：</text>
            <view class="price-list">
              <view 
                v-for="(spec, index) in formData.specs" 
                :key="index"
                class="spec-item"
                @click="editPrice(index)"
              >
                <text>{{ spec.name }}：</text>
                <input 
                  v-model="spec.price"
                  type="number"
                  placeholder="输入价格"
                />
              </view>
            </view>
          </view>

          <!-- 标签管理 -->
          <view class="form-item">
            <text class="label">产品标签：</text>
            <view class="tag-container">
              <view 
                v-for="(tag, index) in formData.tags"
                :key="index"
                class="tag"
              >
                {{ tag }}
                <uni-icons 
                  type="close" 
                  size="14" 
                  @click="removeTag(index)"
                />
              </view>
              <view class="add-tag" @click="showTagPanel = true">+ 添加标签</view>
            </view>
          </view>

          <!-- 备注 -->
          <view class="form-item">
            <text class="label">备注：</text>
            <uni-easyinput 
              v-model="formData.remark"
              type="textarea"
              placeholder="最多输入100个字符"
              :maxlength="100"
            />
            <text class="counter">{{ 100 - formData.remark.length }}字剩余</text>
          </view>
        </scroll-view>

        <view class="form-footer">
          <button class="cancel-btn" @click="closeForm">取消</button>
          <button class="submit-btn" @click="handleSubmit">提交</button>
        </view>
      </view>
    </uni-popup>

    <!-- 分类选择侧边弹窗 -->
    <uni-popup ref="categoryPopup" type="right">
      <view class="selector-panel">
        <view class="panel-header">
          <text>选择分类</text>
          <uni-icons type="close" size="24" @click="showCategory = false"/>
        </view>
        <view class="panel-body">
          <view 
            v-for="item in categories"
            :key="item"
            class="selector-item"
            @click="selectCategory(item)"
          >
            {{ item }}
          </view>
          <view class="add-item" @click="addNewCategory">
            + 新建分类
          </view>
        </view>
      </view>
    </uni-popup>

    <!-- 标签选择面板 -->
    <uni-popup ref="tagPopup" type="right">
      <view class="selector-panel">
        <view class="panel-header">
          <text>选择标签</text>
          <uni-icons type="close" size="24" @click="showTagPanel = false"/>
        </view>
        <view class="panel-body">
          <view class="tag-options">
            <view 
              v-for="tag in defaultTags"
              :key="tag"
              class="tag-option"
              :class="{selected: formData.tags.includes(tag)}"
              @click="toggleTag(tag)"
            >
              {{ tag }}
            </view>
          </view>
          <view class="add-custom-tag">
            <input 
              v-model="newTag"
              placeholder="输入自定义标签"
              @confirm="addCustomTag"
            />
            <button @click="addCustomTag">添加</button>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive, toRaw, watch } from 'vue'

// 表单数据
const formData = reactive({
  images: [],
  name: '',
  sn: '',
  category: '',
  productNo: '',
  properties: [],
  unit: '',
  specs: [{ name: '默认规格', price: '' }],
  tags: [],
  remark: ''
})

// 弹窗控制
const formPopup = ref()
const showForm = ref(false)
const categoryPopup = ref()
const tagPopup = ref()

// 分类相关
const showCategory = ref(false)
const categories = ref(['电子产品', '家居用品', '服装服饰'])
const newCategory = ref('')

// 标签相关
const showTagPanel = ref(false)
const defaultTags = ref(['热销', '新品', '特价', '限量'])
const newTag = ref('')

watch(showForm, (val) => {
  val ? formPopup.value.open() : formPopup.value.close()
})

watch(showCategory, (val) => {
  val ? categoryPopup.value.open() : categoryPopup.value.close()
})

watch(showTagPanel, (val) => {
  val ? tagPopup.value.open() : tagPopup.value.close()
})

// 图片操作
const chooseImage = async () => {
  try {
    const res = await uni.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera']
    })
    formData.images = [...formData.images, ...res.tempFilePaths]
  } catch (error) {
    console.log('取消选择')
  }
}

const previewImage = (index) => {
  uni.previewImage({
    current: index,
    urls: formData.images
  })
}

// 扫描SN码
const handleScan = async () => {
  try {
    const res = await uni.scanCode()
    formData.sn = res.result
  } catch (error) {
    uni.showToast({ title: '扫描取消', icon: 'none' })
  }
}

// 分类操作
const selectCategory = (category) => {
  formData.category = category
  showCategory.value = false
}

const addNewCategory = () => {
  uni.showModal({
    title: '新建分类',
    content: '请输入新分类名称',
    editable: true,
    success: (res) => {
      if (res.confirm && res.content) {
        categories.value.push(res.content)
        formData.category = res.content
        showCategory.value = false
      }
    }
  })
}

// 标签操作
const toggleTag = (tag) => {
  const index = formData.tags.indexOf(tag)
  if (index > -1) {
    formData.tags.splice(index, 1)
  } else {
    formData.tags.push(tag)
  }
}

const addCustomTag = () => {
  if (newTag.value.trim()) {
    formData.tags.push(newTag.value.trim())
    defaultTags.value.push(newTag.value.trim())
    newTag.value = ''
  }
}

const removeTag = (index) => {
  formData.tags.splice(index, 1)
}

// 表单操作
const closeForm = () => {
  showForm.value = false
  resetForm()
}

const resetForm = () => {
  Object.assign(formData, {
    images: [],
    name: '',
    sn: '',
    category: '',
    productNo: '',
    properties: [],
    unit: '',
    specs: [{ name: '默认规格', price: '' }],
    tags: [],
    remark: ''
  })
}

const handleSubmit = () => {
  if (!formData.name.trim()) {
    return uni.showToast({ title: '请填写产品名称', icon: 'none' })
  }
  
  // 处理数据存储
  const rawData = toRaw(formData)
  const products = uni.getStorageSync('products') || []
  products.push(rawData)
  uni.setStorageSync('products', products)
  
  uni.showToast({ title: '保存成功' })
  closeForm()
}
</script>

<style lang="scss">
/* 保持原有基础样式 */
.form-item {
  margin-bottom: 30rpx;
  display: flex;
  align-items: center;
  
  .label {
    width: 160rpx;
    font-size: 28rpx;
    color: #666;
  }
}

/* 新增样式 */
.selector {
  flex: 1;
  padding: 20rpx;
  border: 1rpx solid #e5e5e5;
  border-radius: 8rpx;
  color: #666;
}

.selector-panel {
  width: 70vw;
  height: 100vh;
  background: #fff;
  padding: 30rpx;
  
  .panel-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30rpx;
    border-bottom: 1rpx solid #eee;
  }
  
  .selector-item {
    padding: 20rpx;
    border-bottom: 1rpx solid #eee;
  }
  
  .add-item {
    color: #007AFF;
    padding: 20rpx;
  }
}

.tag-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  
  .tag {
    background: #f0f0f0;
    padding: 10rpx 20rpx;
    border-radius: 40rpx;
    display: flex;
    align-items: center;
    gap: 10rpx;
  }
  
  .add-tag {
    color: #007AFF;
    padding: 10rpx;
  }
}

.price-list {
  flex: 1;
  
  .spec-item {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    
    input {
      flex: 1;
      border: 1rpx solid #eee;
      padding: 10rpx;
      margin-left: 20rpx;
    }
  }
}

.tag-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  
  .tag-option {
    padding: 10rpx 20rpx;
    border: 1rpx solid #007AFF;
    border-radius: 40rpx;
    color: #007AFF;
    
    &.selected {
      background: #007AFF;
      color: white;
    }
  }
}

.add-custom-tag {
  margin-top: 40rpx;
  display: flex;
  gap: 20rpx;
  
  input {
    flex: 1;
    border: 1rpx solid #eee;
    padding: 10rpx;
  }
}
</style>